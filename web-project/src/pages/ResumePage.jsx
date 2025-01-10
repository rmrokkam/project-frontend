import React from 'react';
import './PdfPages.css'; // Import the CSS file
import ResumePDF from '../assets/Resume.pdf'; // Import the PDF file

function ResumePage() {
  return (
    <div className="pdf-container">
      <iframe
        src={ResumePDF}
        title="Resume"
        className="pdf-iframe"
      />
    </div>
  );
}

export default ResumePage;