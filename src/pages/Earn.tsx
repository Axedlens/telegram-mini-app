import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
} from '@mui/material';
import {
  Twitter as TwitterIcon,
  Telegram as TelegramIcon,
  CheckCircle as CheckCircleIcon,
  RadioButtonUnchecked as UncheckedIcon,
} from '@mui/icons-material';

const Task = ({ 
  title, 
  reward, 
  platform, 
  completed = false 
}: { 
  title: string; 
  reward: number; 
  platform: 'twitter' | 'telegram'; 
  completed?: boolean;
}) => (
  <ListItem
    secondaryAction={
      <Button 
        variant="contained" 
        color={completed ? "success" : "primary"}
        disabled={completed}
      >
        {completed ? 'Claimed' : `Claim $${reward}`}
      </Button>
    }
  >
    <ListItemIcon>
      {platform === 'twitter' ? (
        <TwitterIcon color="primary" />
      ) : (
        <TelegramIcon color="primary" />
      )}
    </ListItemIcon>
    <ListItemText 
      primary={title}
      secondary={`Reward: $${reward}`}
    />
    <Box mr={2}>
      {completed ? (
        <CheckCircleIcon color="success" />
      ) : (
        <UncheckedIcon color="disabled" />
      )}
    </Box>
  </ListItem>
);

const Earn = () => {
  const tasks = [
    {
      title: 'Follow us on Twitter',
      reward: 50,
      platform: 'twitter' as const,
      completed: true,
    },
    {
      title: 'Retweet our announcement',
      reward: 30,
      platform: 'twitter' as const,
      completed: false,
    },
    {
      title: 'Join Telegram group',
      reward: 40,
      platform: 'telegram' as const,
      completed: true,
    },
    {
      title: 'Share invite link',
      reward: 25,
      platform: 'telegram' as const,
      completed: false,
    },
  ];

  return (
    <Box sx={{ p: 2, pb: 8 }}>
      <Typography variant="h5" gutterBottom>
        Complete Tasks to Earn
      </Typography>
      
      <Paper 
        sx={{ 
          mt: 2,
          background: 'rgba(45, 45, 45, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <List>
          {tasks.map((task, index) => (
            <React.Fragment key={index}>
              <Task {...task} />
              {index < tasks.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Daily Challenges
      </Typography>
      
      <Paper 
        sx={{ 
          background: 'rgba(45, 45, 45, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <List>
          <Task
            title="Daily Login Bonus"
            reward={10}
            platform="telegram"
            completed={true}
          />
          <Divider />
          <Task
            title="Buy any card"
            reward={20}
            platform="telegram"
            completed={false}
          />
        </List>
      </Paper>
    </Box>
  );
};

export default Earn;
