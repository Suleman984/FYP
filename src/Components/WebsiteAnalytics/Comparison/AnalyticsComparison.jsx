import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Table, TableBody, TableCell, TableContainer, TableRow,TableHead, Paper } from "@mui/material"; // Use @mui/material for all components
import { Audio } from "react-loader-spinner";
const apiUrl = process.env.REACT_APP_API_BASE_URL;
function extractBusinessName(url) {
  try {
    const { hostname } = new URL(url);
    return hostname;
  } catch (error) {
    console.error("Invalid URL:", error);
    return "";
  }
}

const UrlInputForm = () => {
  const [url, setUrl] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [loading, setLoading] = useState(false);
  const [AlexaRanking, setAlexaRanking] = useState(null); // Change initial state to null
  const [VisitorsData, setVisitorsData] = useState(null); // Change initial state to null
  const [VisitorCountry, setVisitorCountry] = useState(null); // Change initial state to null
  const [TopKeywords, setTopKeywords] = useState(null); // Change initial state to null
  const [ReferalSites, setReferalSites] = useState(null); // Change initial state to null
  useEffect(() => {
    const fetchData = async () => {
      if (!businessName) return;
  
      try {
        setLoading(true);
  
        // Request 1: Additional stats
        const additionalRes = await axios.get(
          "http://192.168.18.17:3001/get-AlexaRanking",
          { params: { url: businessName } }
        );
        setAlexaRanking(additionalRes.data);
  
        // Request 2: Daily Pageviews
        const Visitors = await axios.get(
          "http://192.168.18.17:3001/get-VisitorsData",
          { params: { url: businessName } }
        );
        setVisitorsData(Visitors.data);
  
        // // Request 3: Bounce Rate
        const visitorCountryAlexaRanking = await axios.get(
          "http://192.168.18.17:3001/get-VisitorCountry",
          { params: { url: businessName } }
        );
        setVisitorCountry(visitorCountryAlexaRanking.data);
  
        // // Request 4: Search Traffic
        const topkeyword = await axios.get(
          "http://192.168.18.17:3001/get-TopKeywords",
          { params: { url: businessName } }
        );
        setTopKeywords(topkeyword.data);
  
        // // Request 5: Total Sites Linking In
        const ReferalsitesData = await axios.get(
          "http://192.168.10.8:3001/get-ReferalSites",
          { params: { url: businessName } }
        );
        setReferalSites(ReferalsitesData.data);
  
        // console.log(additionalRes.data, pageviewsRes.data, bounceRateRes.data, searchTrafficRes.data, totalSitesRes.data);
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
          </div>)}

          {!loading && ReferalSites && (
        <div style={{ width: "100%", marginTop: "20px" }}>
          <h2>Referal Sites :</h2>
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
              {!loading && ReferalSites && ReferalSites.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>{data.website}</TableCell>
                  <TableCell>{data.ReferalSite}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
          </div>)}
    </Box>
  );
};

export default UrlInputForm;
