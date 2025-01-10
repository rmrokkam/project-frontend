import React from 'react'
import './PdfPages.css'; // Import the CSS file
import SudokuPDF from '../assets/SudokuGeneticAlgorithm.pdf'; // Import the PDF file

function SudokuPage() {
  return (
      <div className="pdf-container">
        <iframe
          src={SudokuPDF}
          title="Resume"
          className="pdf-iframe"
        />
      </div>
    );
}

export default SudokuPage