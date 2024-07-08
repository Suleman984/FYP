import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function MediaCard(props) {
  const handleLearnMoreClick = () => {
    window.open(props.TUrls, '_blank'); // Open the URL in a new tab
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
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
      <CardMedia
        sx={{
          height: 140,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
          }
        }}
        image={props.ToolImage}
        title="Tool Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.ToolTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.ToolTexts}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            size="small"
            onClick={handleLearnMoreClick}
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
  );
}