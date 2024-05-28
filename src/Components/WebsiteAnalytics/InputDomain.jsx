import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://192.168.18.17:3001/get-analytics-page', { params: { url: businessName } });
        setResponse(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (businessName) {
      fetchData();
    }
  }, [businessName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (url) {
      const name = extractBusinessName(url);
      const apiUrl = 'http://gh-export.us/webstats/siteinfo/' + name;
      setBusinessName(apiUrl);
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
      {businessName && (
        <div>
          <h2>Business Name URL:</h2>
          <p>{businessName}</p>
        </div>
      )}
      {/* {response && (
        <div style={{ width: '100%', wordWrap: 'break-word', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )} */}
       {response && (
        <div style={{ width: '100%' }}>
          <h2>API Response:</h2>
          <div dangerouslySetInnerHTML={{ __html: response }} />
        </div>
      )}
    </Box>
  );
};

export default UrlInputForm;
