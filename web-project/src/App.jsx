import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import DescriptionIcon from '@mui/icons-material/Description';
import ArticleIcon from '@mui/icons-material/Article';
import FolderIcon from '@mui/icons-material/Folder';
import AppsIcon from '@mui/icons-material/Apps';
import { Outlet, Link } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/react-router-dom';
import { MedicalInformation } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: '',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'project-information',
    title: 'Project Information',
    icon: <InfoIcon />,
  },
  {
    segment: 'pms',
    title: 'Patient Management System',
    icon: <MedicalInformation />,
  },
  {
    segment: 'sudoku-genetic-algorithm',
    title: 'Sudoku Genetic Algorithm',
    icon: <ArticleIcon />,
  },
  {
    segment: 'other-projects',
    title: 'Other Projects',
    icon: <FolderIcon />,
    children: [
      {
        segment: 'housing-affordability',
        title: 'Housing Affordability',
        icon: <HomeWorkIcon />,
        children: [
          {
            segment: '',
            title: 'Issue of Housing Affordability',
          },
          {
            segment: 'history',
            title: 'History of Housing Affordability',
          },
          {
            segment: 'stakeholders',
            title: 'Stakeholders',
          },
          {
            segment: 'grassroots',
            title: 'Grassroots Initiatives',
          },
          {
            segment: 'systems-map',
            title: 'Systems Map',
          },
          {
            segment: 'summary',
            title: 'Summary',
          },
          {
            segment: 'works-cited',
            title: 'Works Cited',
          },
        ],
      },
    ]
  },
  {
    segment: 'resume',
    title: 'Resume',
    icon: <DescriptionIcon />,
  },
  {
    segment: 'about-me',
    title: 'About Me',
    icon: <AccountCircleIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function App() {
  return (
    <AppProvider
      navigation={NAVIGATION}
      // branding={BRANDING}
      theme={demoTheme}
    >
      <Outlet />
    </AppProvider>
  );
}
