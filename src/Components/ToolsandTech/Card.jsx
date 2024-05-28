import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  const handleLearnMoreClick = () => {
    window.open(props.TUrls, '_blank'); // Open the URL in a new tab
  };

  return (
    <Card sx={{ maxWidth: 345, height: '100%', backgroundColor: '#E0E0E0' }}>
      <CardMedia
        sx={{ height: 140 }}
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
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLearnMoreClick}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
