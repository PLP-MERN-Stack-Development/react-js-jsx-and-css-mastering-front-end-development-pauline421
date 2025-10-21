import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-center py-4 bg-gray-100">
      <p>&copy; 2025 React Application Assignment. All rights reserved.</p>
      <a 
        href="https://powerlearnprojectafrica.org/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:underline"
      >
       Power Learn Project Africa
      </a>
    </footer>
  );
};

export default Footer;
