import React from 'react';

function Algorithms() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Algorithms & Data Structures Enhancements</h2>
      <p className="mb-4">
        For this enhancement, I focused on improving the performance and scalability of <em>Travlr Getaways</em> by addressing how data is retrieved and cached. Originally, the application would retrieve entire collections of trip data in one go, which worked for small datasets but would not scale well as data grew. This presented an opportunity to apply algorithmic thinking to optimize data handling.
      </p>
      <p className="mb-4">
        The following algorithmic improvements were implemented in the project:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Server-side Pagination & Filtering:</strong> The trip listing API now supports query parameters for page size and page number. Instead of returning all trips at once, it returns a limited set of trips for the requested page. I also added sorting (on allowed fields like date or destination) and filtering capabilities (e.g., by resort name) so that clients can fetch just the data they need. This keeps responses small and efficient, reducing load and improving responsiveness.</li>
        <li><strong>LRU Caching for List Queries:</strong> To further enhance performance, I implemented an in-memory cache for trip list results. Using an LRU (Least Recently Used) strategy, the API caches the most recent queries and serves them instantly on repeat requests. The cache uses a hashmap for O(1) lookups and a linked list to track recency for evictions. It invalidates entries if data changes (e.g., when a trip is added or updated) to ensure consistency.</li>
        <li><strong>Optimized Single Trip Lookup:</strong> The endpoint for retrieving a single trip by code was refactored to return a single trip object (instead of an array with one element as before). This was achieved by using a direct database query for that unique trip code. It simplifies the client logic and is more efficient, aligning the operation with expected use (fetching one record).</li>
      </ul>
      <p className="mb-4">
        These changes greatly improved the app’s algorithmic efficiency. The introduction of pagination and filtering ensures the application can handle larger datasets by processing data in manageable chunks, and caching reduces redundant database work on frequently accessed data. The single-record query for trip details provides clarity and slight performance gains for that use case.
      </p>
      <p className="mb-4">
        By making these enhancements, I demonstrated the ability to analyze and optimize algorithms within a real web application context. This work directly ties to the program’s outcome of solving problems using algorithmic principles and managing trade-offs. It also shows use of industry-relevant techniques, since features like pagination and caching are common in production systems for improving scalability. 
      </p>
      <p className="mb-4">
        <em>Reflection:</em> Working on this milestone taught me how seemingly simple initial designs can become inefficient at scale. Implementing server-side pagination required careful handling of edge cases (like what happens at page boundaries or with invalid parameters) and thinking about database query performance. Building the cache from scratch reinforced my understanding of data structures (combining a hash map with a linked list for the LRU pattern). I also had to ensure that adding these features didn’t break existing functionality, highlighting the importance of maintaining backward compatibility while improving the software.
      </p>
      <p className="mb-4">
        <strong>Code Links:</strong> See the algorithm-related changes in the source code on GitHub: compare the <a href="https://github.com/Lawrence-Bonilla/CS465-fullstack" target="_blank" rel="noopener noreferrer">original</a> vs. <a href="https://github.com/Lawrence-Bonilla/TravlrGetaways-enhanced" target="_blank" rel="noopener noreferrer">enhanced</a> repository to view the implementation of pagination, filtering, and caching.
      </p>
    </div>
  );
}

export default Algorithms;