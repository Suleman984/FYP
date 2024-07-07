import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper } from "@mui/material"; // Use @mui/material for all components
import { Audio } from "react-loader-spinner";

// Function to extract business name from URL
function extractBusinessName(url) {
  try {
    const { hostname } = new URL(url);
    return hostname;
  } catch (error) {
    console.error("Invalid URL:", error);
    return "";
  }
}

// Function to perform Axios request with retry logic
const axiosWithRetry = async (url, params, retries = 3, delay = 1000) => {
  const timeout = 5000; // 5 seconds timeout for each request
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.post(url, { params, timeout });
      return response.data;
    } catch (error) {
      if (i === retries - 1) throw error; // If it's the last retry, throw the error
      await new Promise(res => setTimeout(res, delay)); // Wait before retrying
      delay *= 2; // Exponential backoff
    }
  }
};

const AnalyticsComparison = () => {
  const [url, setUrl] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [loading, setLoading] = useState(false);
  const [AlexaRanking, setAlexaRanking] = useState(null);
  const [VisitorsData, setVisitorsData] = useState(null);
  const [VisitorCountry, setVisitorCountry] = useState(null);
  const [TopKeywords, setTopKeywords] = useState(null);
  const [ReferalSites, setReferalSites] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!businessName) return;

      try {
        setLoading(true);
        const baseUrl = "http://localhost:3001";
        const baseReferalUrl = "http://localhost:3001";

        // Request 1: Additional stats
        const alexaRanking = await axiosWithRetry(`${baseUrl}/get-AlexaRanking`, { url: businessName });
        setAlexaRanking(alexaRanking);

        // Request 2: Daily Pageviews
        const visitorsData = await axiosWithRetry(`${baseUrl}/get-VisitorsData`, { url: businessName });
        setVisitorsData(visitorsData);

        // Request 3: Visitor Country
        const visitorCountry = await axiosWithRetry(`${baseUrl}/get-VisitorCountry`, { url: businessName });
        setVisitorCountry(visitorCountry);

        // Request 4: Top Keywords
        const topKeywords = await axiosWithRetry(`${baseUrl}/get-TopKeywords`, { url: businessName });
        setTopKeywords(topKeywords);

        // Request 5: Referral Sites
        const referalSites = await axiosWithRetry(`${baseReferalUrl}/get-ReferalSites`, { url: businessName });
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
    }
  };

  return (
    <Box style={{ width: "100%" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL:
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {loading && (
        <div
          style={{
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
        </div>
      )}

      {!loading && AlexaRanking && (
        <div style={{ width: "100%" }}>
          <h2>Website Analytics:</h2>
          <Box>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {Object.entries(AlexaRanking).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell>{key}</TableCell>
                      <TableCell sx={{ borderLeft: "1px solid #000" }}>{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
      )}
      {!loading && VisitorsData && (
        <div style={{ width: "100%", marginTop: "20px" }}>
          <h2>Visitors Data:</h2>
          <Box>
            <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
              <Table>
                <TableBody>
                  {VisitorsData.map((data, index) => (
                    <TableRow key={index}>
                      <TableCell>{data}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
      )}
      {!loading && VisitorCountry && (
        <div style={{ width: "100%", marginTop: "20px" }}>
          <h2>Visitor Country Data:</h2>
          <Box>
            <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
              <Table>
                <TableBody>
                  {VisitorCountry.map((data, index) => (
                    <TableRow key={index}>
                      <TableCell>{data.country}</TableCell>
                      <TableCell>Alexa Rank:{data.alexaRank}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>  
            </TableContainer>
          </Box>
        </div>
      )}
      {!loading && TopKeywords && (
        <div style={{ width: "100%", marginTop: "20px" }}>
          <h2>Top Keywords Data:</h2>
          <Box>
            <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
              <Table>
                <TableBody>
                  {TopKeywords.map((data, index) => (
                    <TableRow key={index}>
                      <TableCell>{data.keyword}</TableCell>
                      <TableCell>{data.searchTraffic}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
      )}
      {!loading && ReferalSites && (
        <div style={{ width: "100%", marginTop: "20px" }}>
          <h2>Referral Sites:</h2>
          <Box>
            <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Website</TableCell>
                    <TableCell>Referral Traffic</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ReferalSites.map((data, index) => (
                    <TableRow key={index}>
                      <TableCell>{data.website}</TableCell>
                      <TableCell>{data.ReferalSite}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
      )}
    </Box>
  );
};

export default AnalyticsComparison;
