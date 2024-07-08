import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Audio } from "react-loader-spinner";
import { styled } from "@mui/system";
import StreamlitIframe from "./Streamlit";

const extractBusinessName = (url) => {
  try {
    const { hostname } = new URL(url);
    return hostname;
  } catch (error) {
    console.error("Invalid URL:", error);
    return "";
  }
};

const ExpandableCard = styled(Card)({
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
  },
});

const UrlInputForm = () => {
  const [url, setUrl] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showStreamlit, setShowStreamlit] = useState(false); // State to control visibility of Streamlit component

  useEffect(() => {
    const fetchData = async () => {
      if (!businessName) return;

      try {
        setLoading(true);

        const res = await new Promise((resolve, reject) => {
          setTimeout(async () => {
            try {
              let data = { url: businessName };
              const response = await axios.post(
                "http://localhost:3001/get-analytics-page",
                data
              );
              resolve(response);
            } catch (error) {
              reject(error);
            }
          }, 8000); // 8 seconds delay
        });

        setResponse(res.data);
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
      setResponse(null); // Reset previous response
    }
  };

  const handleRecommendations = () => {
    // Your logic to fetch and display recommendations
    console.log("Get Recommendations clicked");
    setShowStreamlit(true); // Show Streamlit component
    // window.location.href('http://localhost:8501/')
    window.open('http://localhost:8501/', '_blank');
  };

  return (
    <Box sx={{ width: "100%" }}>
      <ExpandableCard>
        <CardContent>
          <Typography variant="h5">Enter Website URL</Typography>
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
            <CardActions>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </ExpandableCard>

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

      {!loading && response && (
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: "20px", color: "#2196f3" }}
          >
            Website Analytics
          </Typography>
          <Box dangerouslySetInnerHTML={{ __html: response }} />
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleRecommendations}
            >
              Get Recommendations
            </Button>
          </Box>
          {showStreamlit && <StreamlitIframe />} {/* Conditionally render Streamlit component */}
        </Box>
      )}
    </Box>
  );
};

export default UrlInputForm;
