import React from 'react';
import './ResumePage.css'; // Import the CSS file
import ResumePDF from '../assets/Resume.pdf'; // Import the PDF file

function ResumePage() {
  return (
    <div className="resume-container">
      <iframe
        src={ResumePDF}
        title="Resume"
        className="resume-iframe"
      />
    </div>
  );
}

export default ResumePage;