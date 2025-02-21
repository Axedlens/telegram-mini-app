import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import {
  Timeline as TimelineIcon,
  MonetizationOn as CoinIcon,
  EmojiEvents as TrophyIcon,
  Assessment as StatsIcon
} from '@mui/icons-material';

const StatCard = ({ title, value, icon: Icon }: { title: string; value: string; icon: any }) => (
  <Paper
    sx={{
      p: 2,
      borderRadius: 2,
      background: 'linear-gradient(135deg, rgba(66, 66, 66, 0.8) 0%, rgba(33, 33, 33, 0.8) 100%)',
      backdropFilter: 'blur(10px)',
    }}
  >
    <Box display="flex" alignItems="center" gap={2}>
      <Icon sx={{ fontSize: 40, color: 'primary.main' }} />
      <Box>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h6">
          {value}
        </Typography>
      </Box>
    </Box>
  </Paper>
);

const Home = () => {
  return (
    <Box sx={{ p: 2, pb: 8 }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Welcome Back! 👋
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Your Card Empire Awaits
        </Typography>
      </Box>

      {/* Stats Grid */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <StatCard
            title="Balance"
            value="$1,234.56"
            icon={CoinIcon}
          />
        </Grid>
        <Grid item xs={6}>
          <StatCard
            title="Cards Owned"
            value="12"
            icon={TimelineIcon}
          />
        </Grid>
        <Grid item xs={6}>
          <StatCard
            title="Total Earnings"
            value="$5,678.90"
            icon={TrophyIcon}
          />
        </Grid>
        <Grid item xs={6}>
          <StatCard
            title="Daily Revenue"
            value="$123.45"
            icon={StatsIcon}
          />
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>
        <Paper
          sx={{
            p: 2,
            borderRadius: 2,
            background: 'rgba(45, 45, 45, 0.8)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            • Purchased Miner Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • Earned 100 coins from referral
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • Completed daily task
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
