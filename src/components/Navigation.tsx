import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import {
  Home as HomeIcon,
  Casino as InventoryIcon,
  AttachMoney as EarnIcon,
  Group as InviteIcon,
  AccountBalanceWallet as WalletIcon,
} from '@mui/icons-material';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        borderRadius: '16px 16px 0 0',
        overflow: 'hidden'
      }} 
      elevation={3}
    >
      <BottomNavigation
        value={location.pathname}
        onChange={(_, newValue) => {
          navigate(newValue);
        }}
        sx={{
          background: 'rgba(45, 45, 45, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <BottomNavigationAction
          label="Home"
          value="/"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Inventory"
          value="/inventory"
          icon={<InventoryIcon />}
        />
        <BottomNavigationAction
          label="Earn"
          value="/earn"
          icon={<EarnIcon />}
        />
        <BottomNavigationAction
          label="Invite"
          value="/invite"
          icon={<InviteIcon />}
        />
        <BottomNavigationAction
          label="Wallet"
          value="/wallet"
          icon={<WalletIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;
