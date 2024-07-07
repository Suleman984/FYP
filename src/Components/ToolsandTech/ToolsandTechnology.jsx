import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from '@mui/material';

const ToolsList = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get-toolsandtech')
      .then(response => {
        setTools(response.data);
      })
      .catch(error => {
        console.log("error: ", error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Tools List
      </Typography>
      <Grid container spacing={4}>
        {tools.map(tool => (
          <Grid item key={tool._id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <Box sx={{ height: 200, overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  image={tool.imageAddress}
                  alt={tool.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {tool.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tool.text}
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ToolsList;
