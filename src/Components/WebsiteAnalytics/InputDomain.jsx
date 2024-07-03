import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { Audio } from 'react-loader-spinner';

function extractBusinessName(url) {
  try {
    const { hostname } = new URL(url);
    return hostname;
  } catch (error) {
    console.error('Invalid URL:', error);
    return '';
  }
}

const UrlInputForm = () => {
  const [url, setUrl] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!businessName) return;
      
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:3001/get-analytics-page', { params: { url: businessName } });
        setResponse(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [businessName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (url) {
      const name = extractBusinessName(url);
      const apiUrl = `http://gh-export.us/webstats/siteinfo/${name}`;
      setBusinessName(apiUrl);
      setResponse(null); // Reset previous response
    }
  };

  return (
    <Box style={{ width: '100%' }}>
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
          />
        </div>
      )}

      {/* {!loading && businessName && (
        <div>
          <h2>Business Name URL:</h2>
          <p>{businessName}</p>
        </div>
      )} */}

      {!loading && response && (
        <div style={{ width: '100%' }}>
          <h2>Website Analytics:</h2>
          <div dangerouslySetInnerHTML={{ __html: response }} />
        </div>
      )}
    </Box>
  );
};

export default UrlInputForm;
