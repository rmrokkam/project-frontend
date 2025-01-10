import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PMSLogo from '../assets/PMSLogo.png';
import OtherProjectsLogo from '../assets/OtherProjectsLogo.png';
import SudokuLogo from '../assets/SudokuLogo.png';
import AboutMeLogo from '../assets/AboutMeLogo.png';
import HousingLogo from '../assets/HousingLogo.png';
import ProjectInfoLogo from '../assets/ProjectInfoLogo.png';
import ResumeLogo from '../assets/ResumeLogo.png';
import './Dashboard.css'; // Import the CSS file

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function DashboardPage() {
  const navigator = useNavigate();

  const handleNavigation = (path) => {
    navigator(path);
  };

  return (
    <ImageList
      sx={{ width: 'fit-content', height: '100%'}}
      variant="quilted"
      cols={5}
      rowHeight={154}
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
    cols: 5,
  },
  {
    img: PMSLogo,
    title: 'Patient Management System',
    path: '/pms',
    rows: 1,
    cols: 2,
  },
  {
    img: AboutMeLogo,
    title: 'AboutMe',
    path: '/about-me',
    rows: 3,
    cols: 2,
  },
  {
    img: ResumeLogo,
    title: 'Resume',
    path: '/resume',
    rows: 3,
    cols: 1,
  },
  {
    img: SudokuLogo,
    title: 'Sudoku Genetic Algorithm',
    path: '/sudoku-genetic-algorithm',
    rows: 1,
    cols: 2,
  },
  {
    img: OtherProjectsLogo,
    title: 'Other Projects',
    path: '/other-projects',
    rows: 1,
    cols: 2,
  },
  // Add more items here as needed
];
