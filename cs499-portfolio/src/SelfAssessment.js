import React from 'react';

function SelfAssessment() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Introduction */}
      <h1 className="text-3xl font-bold mb-4">Professional Self-Assessment</h1>
      <p className="mb-4">
        Hello, my name is <strong>Lawrence Bonilla</strong>. Welcome to my Computer Science ePortfolio. 
        I have been in the BS Computer Science program for about four years, and during that time I’ve cultivated a broad skill set in software development. 
        This ePortfolio highlights my journey and growth, showcasing a capstone project called <em>Travlr Getaways</em> and the enhancements I implemented to demonstrate my competencies.
      </p>
      <p className="mb-4">
        Throughout the program I gained proficiency in several key areas:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Data Structures & Algorithms:</strong> Learned to select appropriate data structures (arrays, trees, hash tables, etc.) and apply algorithmic thinking, including analyzing time complexity and performance trade-offs.</li>
        <li><strong>Software Engineering Practices:</strong> Embraced modular design, testing, and debugging techniques, focusing on clean architecture and maintainable code with proper documentation.</li>
        <li><strong>Full-Stack Development:</strong> Built end-to-end applications with user-friendly frontends and robust backends. Designed databases for data persistence and implemented secure CRUD operations, integrating front end, API, and database seamlessly.</li>
      </ul>
      <p className="mb-4">
        My capstone project, Travlr Getaways, is a full-stack travel booking application originally developed in a previous course (CS465). For this ePortfolio, I significantly enhanced this project in three areas: <strong>Software Design/Engineering</strong>, <strong>Algorithms & Data Structures</strong>, and <strong>Databases</strong>. Each enhancement was chosen to demonstrate a particular set of competencies and to fulfill specific course outcomes.
      </p>
      <p className="mb-4">
        These enhancements allowed me to demonstrate the five core program outcomes of the SNHU Computer Science curriculum. In particular, I have:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Collaborative Development:</strong> Employed strategies for building collaborative environments (e.g., using Git and code reviews) to support team-based decision making.</li>
        <li><strong>Communication:</strong> Developed and delivered professional-quality documentation and a video code review to communicate technical information clearly to stakeholders.</li>
        <li><strong>Algorithmic Problem Solving:</strong> Designed and evaluated solutions using algorithmic principles to optimize performance while managing trade-offs in design choices.</li>
        <li><strong>Tools & Techniques:</strong> Applied well-founded engineering tools and techniques (such as layered architecture, automated testing, and CI/CD practices) to implement effective software solutions.</li>
        <li><strong>Security Mindset:</strong> Integrated a security mindset by anticipating and mitigating vulnerabilities (strengthening authentication, input validation, error handling, etc.) to ensure data privacy and secure design.</li>
      </ul>
      <p className="mb-4">
        In summary, the ePortfolio reflects how my academic experience has prepared me for a career in software engineering. My goal is to become a full-stack developer working on web applications, and the skills demonstrated here, from designing maintainable architectures to optimizing algorithms and securing data, align directly with that career path. Thank you for reviewing my work, and I invite you to explore each section of the portfolio to see the specific enhancements and outcomes in action.
      </p>
    </div>
  );
}

export default SelfAssessment;