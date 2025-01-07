import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './ProjectInfoPage.css';

function ProjectInfoPage() {
  const navigator = useNavigate();

  return (
    <div className="project-info-container">
      <h1>Project Information</h1>
      
      <section className="project-section" id="patient-management-system">
        <h2 onClick={() => navigator('../pms')}>
            Patient Management System
        </h2>
        <p>
          The Patient Management System is a CRUD (Create, Read, Update, Delete) application built using <b>ReactJS</b>, <b>CSS</b>, <b>Bootstrap</b>, and <b>Material UI</b> for the frontend. The backend framework uses <b>Java Spring Boot</b>, and the database management system (DBMS) is <b>MySQL</b>. This application allows users to manage patient information efficiently. The main features include:
        </p>
        <ul>
          <li>Adding new patient records</li>
          <li>Viewing existing patient records</li>
          <li>Updating patient information</li>
          <li>Deleting patient records</li>
        </ul>
        <p>
          The reason for creating this application was to practice building a full-fledged CRUD application using modern web technologies. It also serves as a practical example of how to manage state and handle user interactions in a ReactJS application. The backend is built with Java Spring Boot to handle API requests and interact with the MySQL database, ensuring data persistence and integrity.
        </p>
      </section>
      
      <section className="project-section" id="housing-affordability">
        <h2 onClick={() => navigator('../housing-affordability')}>
            Housing Affordability
        </h2>
        <p>
          The Housing Affordability project is a beginning project that uses <b>HTML</b> and <b>CSS</b>. It was created as part of a college assignment to explore the issues surrounding housing affordability and accessibility. The project includes various sections that provide information on:
        </p>
        <ul>
          <li>The definition of the issue</li>
          <li>Historical context and policies</li>
          <li>Stakeholders involved</li>
          <li>Grassroots initiatives</li>
          <li>Systems map</li>
          <li>Summary and works cited</li>
        </ul>
        <p>
          This project helped in understanding how to structure content on a webpage and apply CSS for styling. It also provided insights into the complexities of housing affordability and the various factors that influence it.
        </p>
      </section>
    </div>
  );
}

export default ProjectInfoPage;