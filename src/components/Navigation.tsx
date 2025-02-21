import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShareIcon from '@mui/icons-material/Share';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

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
        borderTop: '1px solid rgba(255, 255, 255, 0.12)'
      }} 
      elevation={3}
    >
      <BottomNavigation
        value={location.pathname}
        onChange={(_, newValue) => {
          navigate(newValue);
        }}
        showLabels
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
          icon={<AttachMoneyIcon />}
        />
        <BottomNavigationAction
          label="Invite"
          value="/invite"
          icon={<ShareIcon />}
        />
        <BottomNavigationAction
          label="Wallet"
          value="/wallet"
          icon={<AccountBalanceWalletIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;
