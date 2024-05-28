import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MediaCard from './Card';
import { ToolImageAdresses, ToolTexts, ToolTitles ,ToolUrls} from './ToolsData';

export default function DenseAppBar() {
  console.log(ToolImageAdresses)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ width: '100%', cursor: 'default',backgroundColor:'#757575' }}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          >
            Tools And Technologies
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: '20px' }}>
        <Typography variant='h2'>Platforms</Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {ToolTitles.map((title, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MediaCard
              ToolImage={ToolImageAdresses[index]}
              TUrls={ToolUrls[index]}
              ToolTitle={ToolTitles[index]}
              ToolTexts={ToolTexts[index]}
              
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
