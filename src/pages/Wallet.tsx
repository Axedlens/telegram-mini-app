import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  AccountBalanceWallet as WalletIcon,
  Link as LinkIcon,
} from '@mui/icons-material';

const WalletConnection = ({ 
  type, 
  address, 
  onConnect 
}: { 
  type: string; 
  address: string | null;
  onConnect: () => void;
}) => (
  <Paper 
    sx={{ 
      p: 2,
      mb: 2,
      background: 'rgba(45, 45, 45, 0.8)',
      backdropFilter: 'blur(10px)',
    }}
  >
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" gap={2}>
        <WalletIcon color="primary" />
        <Box>
          <Typography variant="subtitle1">{type} Wallet</Typography>
          {address ? (
            <Typography variant="body2" color="text.secondary">
              {address.slice(0, 6)}...{address.slice(-4)}
            </Typography>
          ) : (
            <Typography variant="body2" color="error">
              Not Connected
            </Typography>
          )}
        </Box>
      </Box>
      <Button
        variant={address ? "outlined" : "contained"}
        onClick={onConnect}
        startIcon={<LinkIcon />}
      >
        {address ? "Disconnect" : "Connect"}
      </Button>
    </Box>
  </Paper>
);

const Wallet = () => {
  const [tonAddress, setTonAddress] = useState<string | null>(null);
  const [solAddress, setSolAddress] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [walletType, setWalletType] = useState<'TON' | 'SOL' | null>(null);
  const [walletInput, setWalletInput] = useState('');

  const handleConnectWallet = (type: 'TON' | 'SOL') => {
    setWalletType(type);
    setWalletInput('');
    setOpenDialog(true);
  };

  const handleConfirmConnection = () => {
    if (walletType === 'TON') {
      setTonAddress(walletInput);
    } else {
      setSolAddress(walletInput);
    }
    setOpenDialog(false);
  };

  return (
    <Box sx={{ p: 2, pb: 8 }}>
      <Typography variant="h5" gutterBottom>
        Connect Wallets
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Connect your wallets to receive future airdrops and rewards
      </Typography>

      <WalletConnection
        type="TON"
        address={tonAddress}
        onConnect={() => handleConnectWallet('TON')}
      />

      <WalletConnection
        type="Solana"
        address={solAddress}
        onConnect={() => handleConnectWallet('SOL')}
      />

      {/* Rewards Section */}
      <Paper 
        sx={{ 
          p: 2,
          mt: 3,
          background: 'linear-gradient(135deg, rgba(66, 66, 66, 0.8) 0%, rgba(33, 33, 33, 0.8) 100%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Upcoming Rewards
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Early adopter airdrop - Coming Soon
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Special NFT for top players
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Exclusive token rewards
        </Typography>
      </Paper>

      {/* Connect Wallet Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          sx: {
            background: 'rgba(45, 45, 45, 0.95)',
            backdropFilter: 'blur(10px)',
          }
        }}
      >
        <DialogTitle>
          Connect {walletType} Wallet
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Wallet Address"
            type="text"
            fullWidth
            variant="outlined"
            value={walletInput}
            onChange={(e) => setWalletInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>
            Cancel
          </Button>
          <Button onClick={handleConfirmConnection} variant="contained">
            Connect
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Wallet;
