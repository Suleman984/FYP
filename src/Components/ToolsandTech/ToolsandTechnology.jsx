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
        console.error('Error fetching tools:', error);
      });
  }, []);

  const addNewTool = (newTool) => {
    axios.post('http://localhost:3001/add-tool', newTool)
      .then(response => {
        setTools([...tools, response.data.newTool]);
      })
      .catch(error => {
        console.error('Error adding new tool:', error);
      });
  };

  return (
    <Container>
      <Box sx={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '20px', color: '#2196f3' }}>
          Tools List
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {tools.map(tool => (
          <Grid item key={tool._id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                backgroundColor: '#E0E0E0',
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                }
              }}
            >
              <Box sx={{ height: 200, overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  image={tool.imageAddress}
                  alt={tool.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    }
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
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Button
                    size="small"
                    color="primary"
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: '90%',
                      backgroundColor: '#2196f3',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#1976d2',
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ToolsList;