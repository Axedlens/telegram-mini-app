import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from '@mui/material';
import {
  Share as ShareIcon,
  ContentCopy as CopyIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const Invite = () => {
  const referralCode = "ABC123XYZ";
  const referralLink = `https://t.me/YourBot?start=${referralCode}`;
  
  const referrals = [
    { name: "@user1", earnings: 150, active: true },
    { name: "@user2", earnings: 75, active: true },
    { name: "@user3", earnings: 30, active: false },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    // You could add a toast notification here
  };

  return (
    <Box sx={{ p: 2, pb: 8 }}>
      {/* Stats Section */}
      <Paper 
        sx={{ 
          p: 3,
          background: 'linear-gradient(135deg, rgba(66, 66, 66, 0.8) 0%, rgba(33, 33, 33, 0.8) 100%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Your Referral Stats
        </Typography>
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: 2,
            textAlign: 'center',
            my: 2,
          }}
        >
          <Box>
            <Typography variant="h4">2</Typography>
            <Typography color="text.secondary">Active Referrals</Typography>
          </Box>
          <Box>
            <Typography variant="h4">$225</Typography>
            <Typography color="text.secondary">Total Earnings</Typography>
          </Box>
        </Box>
      </Paper>

      {/* Referral Link Section */}
      <Paper 
        sx={{ 
          p: 3, 
          mt: 3,
          background: 'rgba(45, 45, 45, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Your Referral Link
        </Typography>
        <Typography color="text.secondary" variant="body2" sx={{ mb: 2 }}>
          Share this link to earn 10% of your friends' earnings!
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Button
            variant="contained"
            startIcon={<ShareIcon />}
            fullWidth
          >
            Share
          </Button>
          <Button
            variant="outlined"
            startIcon={<CopyIcon />}
            onClick={copyToClipboard}
          >
            Copy
          </Button>
        </Box>
        <Typography 
          variant="body2" 
          sx={{ 
            p: 1, 
            background: 'rgba(0, 0, 0, 0.2)', 
            borderRadius: 1,
            wordBreak: 'break-all'
          }}
        >
          {referralLink}
        </Typography>
      </Paper>

      {/* Referrals List */}
      <Paper 
        sx={{ 
          mt: 3,
          background: 'rgba(45, 45, 45, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <List>
          {referrals.map((referral, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={referral.name}
                  secondary={`Earned: $${referral.earnings}`}
                />
                <Typography
                  variant="caption"
                  color={referral.active ? "success.main" : "error.main"}
                >
                  {referral.active ? "Active" : "Inactive"}
                </Typography>
              </ListItem>
              {index < referrals.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Invite;
