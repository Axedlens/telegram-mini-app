import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from '@mui/material';
import { Casino as CardIcon, Star as StarIcon } from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const GameCard = ({ 
  name, 
  cost, 
  earnings, 
  owned = false,
  quantity = 0
}: { 
  name: string; 
  cost: number; 
  earnings: number;
  owned?: boolean;
  quantity?: number;
}) => (
  <Card 
    sx={{ 
      background: 'linear-gradient(135deg, rgba(66, 66, 66, 0.8) 0%, rgba(33, 33, 33, 0.8) 100%)',
      backdropFilter: 'blur(10px)',
    }}
  >
    <CardContent>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <CardIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        <Typography variant="h6">{name}</Typography>
      </Box>
      {owned ? (
        <>
          <Typography color="text.secondary">
            Quantity: {quantity}
          </Typography>
          <Typography color="text.secondary">
            Daily Earnings: ${earnings * quantity}
          </Typography>
        </>
      ) : (
        <>
          <Typography color="text.secondary">
            Cost: ${cost}
          </Typography>
          <Typography color="text.secondary">
            Earnings: ${earnings}/day
          </Typography>
        </>
      )}
    </CardContent>
    <CardActions>
      {owned ? (
        <Button 
          size="small" 
          color="primary" 
          variant="contained"
          disabled
        >
          Owned x{quantity}
        </Button>
      ) : (
        <Button 
          size="small" 
          color="primary" 
          variant="contained"
        >
          Buy Now
        </Button>
      )}
    </CardActions>
  </Card>
);

const Inventory = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const ownedCards = [
    { name: 'Miner', cost: 300, earnings: 4, quantity: 2 },
    { name: 'Farmer', cost: 1000, earnings: 15, quantity: 1 },
  ];

  const availableCards = [
    { name: 'Engineer', cost: 3000, earnings: 50 },
    { name: 'CEO', cost: 5000, earnings: 100 },
    { name: 'Investor', cost: 10000, earnings: 300 },
  ];

  const specialCards = [
    { name: 'Elon Musk', cost: 'TBA', earnings: 'TBA' },
    { name: 'Donald Trump', cost: 'TBA', earnings: 'TBA' },
  ];

  return (
    <Box sx={{ pb: 8 }}>
      <Paper 
        sx={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 1,
          background: 'rgba(45, 45, 45, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
        >
          <Tab label="Owned" />
          <Tab label="Available" />
          <Tab label="Special" />
        </Tabs>
      </Paper>

      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={2}>
          {ownedCards.map((card, index) => (
            <Grid item xs={12} key={index}>
              <GameCard {...card} owned={true} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Grid container spacing={2}>
          {availableCards.map((card, index) => (
            <Grid item xs={12} key={index}>
              <GameCard {...card} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Grid container spacing={2}>
          {specialCards.map((card, index) => (
            <Grid item xs={12} key={index}>
              <Card 
                sx={{ 
                  background: 'linear-gradient(135deg, rgba(66, 66, 66, 0.8) 0%, rgba(33, 33, 33, 0.8) 100%)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <StarIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
                    <Typography variant="h6">{card.name}</Typography>
                  </Box>
                  <Typography color="text.secondary">Coming Soon!</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
};

export default Inventory;
