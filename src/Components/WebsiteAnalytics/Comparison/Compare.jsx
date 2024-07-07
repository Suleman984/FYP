import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import AnalyticsComparison from './AnalyticsComparison'; // Adjust the path as per your project structure

const ThreeColumnLayout = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Box sx={{ padding: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
          <Typography variant="h6">Website 1</Typography>
          <AnalyticsComparison />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ padding: 2, backgroundColor: '#e0f7fa', borderRadius: 1 }}>
          <Typography variant="h6">Website 2</Typography>
          <AnalyticsComparison />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ padding: 2, backgroundColor: '#ffe0b2', borderRadius: 1 }}>
          <Typography variant="h6">Website 3</Typography>
          <AnalyticsComparison />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ThreeColumnLayout;
