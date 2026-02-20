import React from 'react';

function Footer() {
  return (
    <footer className="bg-teal-900 text-gray-100 text-sm text-center py-4 mt-auto">
      © 2026 Lawrence Bonilla. 
      {" "}
      <a className="underline hover:text-teal-300" href="resume.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
      {" | "}
      <a className="underline hover:text-teal-300" href="mailto:lawrence.bonilla@snhu.edu">
        Contact Me
      </a>
    </footer>
  );
}

export default Footer;