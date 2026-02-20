import React from 'react';

function SoftwareDesign() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Software Design & Engineering Enhancements</h2>
      <p className="mb-4">
        <em>Travlr Getaways</em> is a full-stack travel booking web application originally built in CS465 (Full Stack Development I). It consists of an <strong>Express/Node.js</strong> backend with a <strong>MongoDB</strong> database and an <strong>Angular</strong> front-end admin interface. I selected this artifact for the software design enhancements because it demonstrates end-to-end architecture and had areas that could be improved in terms of engineering best practices.
      </p>
      <p className="mb-4">
        In this enhancement, I focused on improving the project’s architecture and code quality. Key software design improvements implemented include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Centralized Configuration:</strong> Moved environment-specific settings (API URLs, secrets, allowed origins, etc.) into a single config module instead of scattering them in code. This reduces hard-coded values and makes the app easier to configure for different environments.</li>
        <li><strong>JWT Authentication Middleware Fixes:</strong> Refactored the authentication flow to ensure routes are properly protected. The JWT verification middleware now reliably checks tokens before allowing access, and unauthorized responses are standardized to close security gaps.</li>
        <li><strong>Consistent Error Handling:</strong> Implemented a uniform error-handling strategy. Controllers and routes now produce structured error responses with proper HTTP status codes, eliminating ambiguous failures and undefined behaviors when something goes wrong.</li>
        <li><strong>Improved Code Maintainability:</strong> Cleaned up controller logic by removing duplicate code and simplifying functions. Clear naming conventions and comments were added to improve readability and intent. Helper functions were introduced to handle repetitive tasks, reducing clutter.</li>
        <li><strong>Clear Separation of Concerns:</strong> Restructured how the server routes are organized. The Express app now properly differentiates between server-rendered pages and the REST API endpoints, preventing the overlap that previously caused confusion. This re-organization makes the codebase easier to navigate and maintain.</li>
      </ul>
      <p className="mb-4">
        These enhancements significantly improved the software engineering quality of the project. The codebase is more maintainable, configuration-driven, and secure as a result. This work directly supports the program’s outcomes on employing well-founded techniques (by applying industry-standard design patterns) and developing a security mindset (by closing authentication loopholes and handling errors safely). 
      </p>
      <p className="mb-4">
        <em>Reflection:</em> Through this process, I learned how small design decisions can have a large impact on software quality. For example, I discovered that the order and structure of middleware in an Express app are crucial, a misplaced authentication check can expose endpoints unintentionally. By centralizing configuration and standardizing error handling, I gained insight into building more robust and professional-grade applications. This enhancement reinforced the importance of designing for maintainability and security from the start.
      </p>
      <p className="mb-4">
        <strong>Code Links:</strong> You can view the source code for the <a href="https://github.com/Lawrence-Bonilla/CS465-fullstack" target="_blank" rel="noopener noreferrer">original Travlr Getaways</a> and the <a href="https://github.com/Lawrence-Bonilla/TravlrGetaways-enhanced" target="_blank" rel="noopener noreferrer">enhanced version</a> on GitHub. (The enhancements described above are reflected in the enhanced repository.)
      </p>
    </div>
  );
}

export default SoftwareDesign;