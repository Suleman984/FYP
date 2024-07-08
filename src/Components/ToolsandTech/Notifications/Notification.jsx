import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Fade, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  notificationsContainer: {
    marginTop: theme.spacing(2),
  },
  notificationItem: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.paper,
    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows[6],
    },
  },
  notificationImage: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginRight: theme.spacing(2),
    objectFit: 'cover',
    borderRadius: '50%',
  },
}));

const Notifications = () => {
  const classes = useStyles();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications(); // Initial fetch on component mount
  }, []);

  const fetchNotifications = () => {
    axios.get('http://localhost:3001/get-notifications')
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
      });
  };

  // Optionally, you can set up a timer to periodically fetch notifications
  useEffect(() => {
    const interval = setInterval(fetchNotifications, 60000); // Fetch every minute (adjust as needed)
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <Box className={classes.notificationsContainer}>
      <Typography variant="h5" component="h2" gutterBottom>
        Notifications
      </Typography>
      <List>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <Fade in key={index}>
              <ListItem className={classes.notificationItem}>
                <ListItemAvatar>
                  <Avatar alt={notification.title} src={notification.imageAddress} className={classes.notificationImage} />
                </ListItemAvatar>
                <ListItemText
                  primary={notification.title}
                  secondary={notification.text}
                />
              </ListItem>
            </Fade>
          ))
        ) : (
          <Fade in>
            <Typography variant="body2">No notifications to display.</Typography>
          </Fade>
        )}
      </List>
    </Box>
  );
};

export default Notifications;
