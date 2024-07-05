import React from 'react';
import { Grid, Paper, Typography, Box } from '@material-ui/core';
import UrlInputForm from '../InputDomain';  // Adjust the path based on your directory structure

const CompareAnalytics = () => {
  return (
    <Grid container spacing={3} style={{ overflowX: 'hidden' }}>
      {/* Columns */}
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} style={{ height: '100%', padding: '20px', overflowX: 'hidden' }}>
          <Typography variant="h5"> Website 1</Typography>
          <UrlInputForm />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} style={{ height: '100%', padding: '20px', overflowX: 'hidden' }}>
          <Typography variant="h5">Website 2</Typography>
          <UrlInputForm />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} style={{ height: '100%', padding: '20px', overflowX: 'hidden' }}>
          <Typography variant="h5">Website 3</Typography>
          <UrlInputForm />
        </Paper>
      </Grid>

      {/* Material UI Box */}
      <Grid item xs={12}>
        <Box mt={3} p={2} bgcolor="info.main" color="info.contrastText">
          <Typography variant="h6">Material UI Box</Typography>
          <Typography>This box displays additional text.</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CompareAnalytics;
