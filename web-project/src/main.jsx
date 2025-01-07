import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Layout from './layouts/Layout';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import PatientManagementSystem from './pages/PMS/PatientManagementSystem';
import ListPatient from './pages/PMS/ListPatient';
import Patient from './pages/PMS/Patient';
import IssuePage from './pages/Housing/Issue.jsx'
import HistoryPage from './pages/Housing/History.jsx'
import StakeholdersPage from './pages/Housing/Stakeholders.jsx'
import GrassrootsPage from './pages/Housing/Grassroots.jsx'
import SystemsMapPage from './pages/Housing/SystemsMap.jsx'
import SummaryPage from './pages/Housing/Summary.jsx'
import WorksCitedPage from './pages/Housing/WorksCited.jsx'
import HousingPage from './pages/Housing/HousingPage';
import ProjectInfoPage from './pages/ProjectInfoPage';
import ResumePage from './pages/ResumePage';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: DashboardPage,
          },
          {
            path: 'project-information',
            Component: ProjectInfoPage,
          },
          {
            path: 'pms',
            Component: PatientManagementSystem,
            children: [
              {
                path: '',
                Component: ListPatient,
              },
              {
                path: 'add-patient',
                Component: Patient,
              },
              {
                path: 'edit-patient/:id',
                Component: Patient,
              },
            ],
          },
          {
            path: 'housing-affordability',
            Component: HousingPage,
            children: [
              {
                path: '',
                Component: IssuePage,
              },
              {
                path: 'history',
                Component: HistoryPage,
              },
              {
                path: 'stakeholders',
                Component: StakeholdersPage,
              },
              {
                path: 'grassroots',
                Component: GrassrootsPage,
              },
              {
                path: 'systems-map',
                Component: SystemsMapPage,
              },
              {
                path: 'summary',
                Component: SummaryPage,
              },
              {
                path: 'works-cited',
                Component: WorksCitedPage,
              },
            ],
          },
          {
            path: 'resume',
            Component: ResumePage,
          },
          {
            path: 'about-me',
            Component: AboutPage,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: NotFound,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
