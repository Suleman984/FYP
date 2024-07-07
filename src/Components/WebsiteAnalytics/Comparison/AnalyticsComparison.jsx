import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Card,
  CardContent,
  Typography,
  Collapse,
  Button,
  TextField,
} from "@mui/material";
import { Audio } from "react-loader-spinner";
import { styled } from "@mui/system";

const extractBusinessName = (url) => {
  try {
    const { hostname } = new URL(url);
    return hostname;
  } catch (error) {
    console.error("Invalid URL:", error);
    return "";
  }
};

const axiosWithRetry = async (url, params, retries = 3, delay = 1000) => {
  const timeout = 5000; // 5 seconds timeout for each request
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.post(url, { params, timeout });
      return response.data;
    } catch (error) {
      if (i === retries - 1) throw error; // If it's the last retry, throw the error
      await new Promise((res) => setTimeout(res, delay)); // Wait before retrying
      delay *= 2; // Exponential backoff
    }
  }
};

const ExpandableCard = styled(Card)({
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
  },
});

const AnalyticsComparison = ({ title }) => {
  const [url, setUrl] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [loading, setLoading] = useState(false);
  const [alexaRanking, setAlexaRanking] = useState(null);
  const [visitorsData, setVisitorsData] = useState(null);
  const [visitorCountry, setVisitorCountry] = useState(null);
  const [topKeywords, setTopKeywords] = useState(null);
  const [referalSites, setReferalSites] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!businessName) return;

      try {
        setLoading(true);
        const baseUrl = "http://localhost:3001";

        const alexaRanking = await axiosWithRetry(
          `${baseUrl}/get-AlexaRanking`,
          { url: businessName }
        );
        setAlexaRanking(alexaRanking);

        const visitorsData = await axiosWithRetry(
          `${baseUrl}/get-VisitorsData`,
          { url: businessName }
        );
        setVisitorsData(visitorsData);

        const visitorCountry = await axiosWithRetry(
          `${baseUrl}/get-VisitorCountry`,
          { url: businessName }
        );
        setVisitorCountry(visitorCountry);

        const topKeywords = await axiosWithRetry(`${baseUrl}/get-TopKeywords`, {
          url: businessName,
        });
        setTopKeywords(topKeywords);

        const referalSites = await axiosWithRetry(
          `${baseUrl}/get-ReferalSites`,
          { url: businessName }
        );
        setReferalSites(referalSites);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [businessName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      const name = extractBusinessName(url);
      const apiUrl = `http://gh-export.us/webstats/siteinfo/${name}`;
      setBusinessName(apiUrl);
      setSubmitted(true); // Hide input card
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={!submitted}>
        <ExpandableCard>
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                type="url"
                label="Website URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                required
                fullWidth
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </CardContent>
        </ExpandableCard>
      </Collapse>

      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
          />
        </Box>
      )}

      {!loading && alexaRanking && (
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            Alexa Ranking:
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {Object.entries(alexaRanking).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {!loading && visitorsData && (
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            Visitors Data:
          </Typography>
          <TableContainer component={Paper} sx={{ marginBottom: "20px" }}>
            <Table>
              <TableBody>
                {visitorsData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {!loading && visitorCountry && (
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            Visitor Country Data:
          </Typography>
          <TableContainer component={Paper} sx={{ marginBottom: "20px" }}>
            <Table>
              <TableBody>
                {visitorCountry.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.country}</TableCell>
                    <TableCell>Alexa Rank: {data.alexaRank}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {!loading && topKeywords && (
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            Top Keywords Data:
          </Typography>
          <TableContainer component={Paper} sx={{ marginBottom: "20px" }}>
            <Table>
              <TableBody>
                {topKeywords.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.keyword}</TableCell>
                    <TableCell>{data.searchTraffic}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {!loading && referalSites && (
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            Referral Sites:
          </Typography>
          <TableContainer component={Paper} sx={{ marginBottom: "20px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Website</TableCell>
                  <TableCell>Referral Traffic</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {referalSites.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.website}</TableCell>
                    <TableCell>{data.referalTraffic}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};

export default AnalyticsComparison;
