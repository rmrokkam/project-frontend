import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import RohanLogo from '../assets/RohanRokkamLogo.png';

function SidebarFooter({ mini }) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      {mini ? `© ${new Date().getFullYear()}` : `© ${new Date().getFullYear()} Made by Rohan Rokkam`}
    </Typography>
  );
}

SidebarFooter.propTypes = {
  mini: PropTypes.bool.isRequired,
};

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <img src={RohanLogo} alt="Rohan Rokkam Logo" style={{ height: '40px' }} />
      <Typography
      sx={{ fontWeight: 'bold' }} 
      variant="h4">
        Rohan's Toolpad
      </Typography>
    </Stack>
  );
}

export default function Layout() {
  return (
    <DashboardLayout
      slots={{
        appTitle: CustomAppTitle,
        sidebarFooter: SidebarFooter,
      }}
    >
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
