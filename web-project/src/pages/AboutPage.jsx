import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './AboutPage.css'; // Import the CSS file
import ProfessionalPic from '../assets/ProfessionalPic.jpg';
import RohanRokkamLogo from '../assets/RohanRokkamLogo.png';

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-text">
        <Typography variant="h4" className="about-title">
          About Me
        </Typography>
        
        <section className="about-section">
          <Typography variant="h5" className="about-subtitle">
            Introduction
          </Typography>
          <Typography variant="body1" className="about-paragraph">
            Hi, I'm Rohan—a passionate and dedicated software developer with a strong foundation in computer science and a keen interest in continuous learning. I recently graduated from the University of Minnesota - Twin Cities with a B.A. in Computer Science and a minor in Leadership. During my academic journey, I honed my problem-solving skills and cultivated a collaborative mindset, which I carry into my professional endeavors.
          </Typography>
        </section>
        
        <section className="about-section">
          <Typography variant="h5" className="about-subtitle">
            Professional Experience
          </Typography>
          <Typography variant="body1" className="about-paragraph">
            In the summer of 2024, I interned at ImageTrend as a Quality Assurance Intern, where I focused on automated QA testing, ensuring the reliability and efficiency of software products. This experience deepened my understanding of software quality and reinforced my commitment to building robust, user-centric applications.
          </Typography>
        </section>
        
        <section className="about-section">
          <Typography variant="h5" className="about-subtitle">
            Current Learning Pursuits
          </Typography>
          <Typography variant="body1" className="about-paragraph">
            Since graduating, I've been expanding my expertise in full-stack development, data analysis, and emerging technologies. My current learning pursuits include:
          </Typography>
          <List className="about-list">
            <ListItem>
              <ListItemText primary="Full-Stack Development: MySQL, Spring Boot (Java), and ReactJS" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Business Intelligence: Microsoft Power BI" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Data Science & AI: Machine Learning and Artificial Intelligence" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Data Engineering: ETL Processes" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Enterprise Solutions: ERP Systems" />
            </ListItem>
          </List>
        </section>
        
        <section className="about-section">
          <Typography variant="h5" className="about-subtitle">
            Overall Skills
          </Typography>
          <Typography variant="body1" className="about-paragraph">
            Here are some of the technical skills I have acquired over the years:
          </Typography>
          <List className="about-list">
            <ListItem>
              <ListItemText primary="Programming Languages: Java, Python, C++, C, Assembly, OCAML, JavaScript" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Frameworks and Libraries: Spring Boot, ReactJS" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Web Technologies: HTML, CSS" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Testing Tools: Selenium (C#)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="DevOps Tools: Azure DevOps, Docker" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Database Management: MySQL" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Business Intelligence: Power BI" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Artificial Intelligence and Machine Learning: AI/ML" />
            </ListItem>
          </List>
        </section>
      </div>
      
      <div className="about-picture">
        <img src={ProfessionalPic} alt="Photo of Rohan Rokkam" />
      </div>
    </div>
  );
}
