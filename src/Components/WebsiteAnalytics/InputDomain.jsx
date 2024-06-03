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
        
		// **************************************************************************************
    //     const parser = new DOMParser();

		// 	const doc = parser.parseFromString(res.data, 'text/html');

		// 	const table = doc.querySelector('table');

		// 	const headings = Array.from(table.querySelectorAll('th')).map(th => th.textContent.trim());
		// 	const rows = Array.from(table.querySelectorAll('tbody tr'));

		// 	const extractedData = rows.map(row => {
		// 		const rowData = Array.from(row.querySelectorAll('td')).map(td => td.textContent.trim());
		// 		const obj = {};
		// 		headings.forEach((heading, index) => {
		// 			obj[heading] = rowData[index];
		// 		});
		// 		return obj;
		// 	});
		// 	const cardDivs = doc.querySelectorAll('.grid > div');
		
		// 	const dataArray = [];

		// 	cardDivs.forEach(cardDiv => {
		// 		const heading = cardDiv.querySelector('p:nth-child(1)').textContent.trim();
		// 		const value = cardDiv.querySelector('p:nth-child(2)').textContent.trim();
		// 		dataArray.push({ heading, value });
		// 	});

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
