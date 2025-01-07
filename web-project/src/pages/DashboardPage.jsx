import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import PMSLogoLightMode from '../assets/PMSLogoLightMode.png';
import PMSLogoDarkMode from '../assets/PMSLogoDarkMode.png';
import AboutMeLogo from '../assets/AboutMeLogo.png';
import HousingLogo from '../assets/HousingLogo.png';
import ProjectInfoLogo from '../assets/ProjectInfoLogo.png';
import ResumeLogo from '../assets/ResumeLogo.png';
import './DashboardPage.css'; // Import the CSS file

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <ImageList
      sx={{ width: 'fit-content', height: 'fit-content'}}
      variant="quilted"
      cols={5}
      rowHeight={200}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
          onClick={() => handleNavigation(item.path)}
          style={{ cursor: 'pointer' }}
          className="image-list-item" // Add this line
          sx={{ width: 'auto', height: 'auto' }}
        >
          <img
            {...srcset(item.img, 200, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: ProjectInfoLogo,
    title: 'Project Information',
    path: '/project-information',
    rows: 1,
    cols: 4,
  },
  {
    img: ResumeLogo,
    title: 'Resume',
    path: '/resume',
    rows: 3,
    cols: 1,
  },
  {
    img: PMSLogoLightMode,
    title: 'Patient Management System',
    path: '/pms',
    rows: 1,
    cols: 2,
  },
  {
    img: AboutMeLogo,
    title: 'AboutMe',
    path: '/about-me',
    rows: 2,
    cols: 2,
  },
  {
    img: HousingLogo,
    title: 'Housing Affordability',
    path: '/housing-affordability',
    rows: 1,
    cols: 2,
  },
  // Add more items here as needed
];
