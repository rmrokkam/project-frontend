import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './Dashboard.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import HousingLogo from '../assets/HousingLogo.png'

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

export default function OtherProjectsPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
      <>
        <div>
          <Outlet />
        </div>
        <ImageList
            sx={{ width: 'fit-content', height: '100%'}}
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
      </>
    )
}

const itemData = [
  {
    img: HousingLogo,
    title: 'Housing Affordability',
    path: './housing-affordability',
    rows: 1,
    cols: 1,
  },
  // Add more items here as needed
];