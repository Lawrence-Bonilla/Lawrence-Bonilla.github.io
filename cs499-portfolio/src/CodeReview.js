import React from 'react';

function CodeReview() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Code Review</h2>
      <p className="mb-4">
        As part of the project, I conducted a comprehensive code review of the Travlr Getaways application. In the video below, I walk through the codebase, identifying areas of improvement and explaining the enhancements I planned and implemented. This exercise demonstrates my ability to critically evaluate code and communicate my thought process, which is crucial for collaborative software development and aligning with industry best practices.
      </p>
      {/* Responsive video embed */}
      <div className="mb-4 relative" style={{ paddingBottom: '56.25%', height: 0 }}>
        <iframe 
          title="Travlr Getaways Code Review" 
          className="absolute top-0 left-0 w-full h-full" 
          src="https://www.youtube.com/embed/ZupeEsuSEbw" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      <p className="mb-4">
        (If the video does not load, you can watch it on YouTube via <a href="https://youtu.be/ZupeEsuSEbw" target="_blank" rel="noopener noreferrer">this direct link</a>.)
      </p>
      <p className="mb-4">
        <em>Code Review Highlights:</em> In the review, I cover how the application is structured, discuss code quality issues found (such as inconsistent error handling and hardcoded configurations), and outline my plans for enhancements. This process ensured that I had a clear roadmap and that the improvements would address real issues in the code. Conducting the review and creating the video helped fulfill the collaboration and communication learning outcomes, by presenting technical information in a format accessible to others.
      </p>
    </div>
  );
}

export default CodeReview;