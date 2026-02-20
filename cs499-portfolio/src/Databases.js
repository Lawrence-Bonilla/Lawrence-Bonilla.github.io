import React from 'react';

function Databases() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Database Enhancements</h2>
      <p className="mb-4">
        The final set of enhancements strengthened the <strong>database layer</strong> of <em>Travlr Getaways</em>. In the original implementation, the database was functional but minimal – it handled basic CRUD and authentication, but it didn’t enforce many constraints or use advanced database features. My goal was to refactor the data model and database operations to be more robust, secure, and reflective of real-world requirements.
      </p>
      <p className="mb-4">
        Key database enhancements implemented:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Stronger Schema Validation:</strong> Updated the MongoDB/Mongoose schemas (especially for the Trip model) to enforce stricter validation. Important fields are now required and have defined data types and value constraints (e.g., numerical ranges), ensuring that only valid data is stored. This reduces the chance of inconsistent or problematic data entering the system.</li>
        <li><strong>Capacity Management Fields:</strong> Extended the Trip schema to include fields for capacity tracking (such as a maximum bookings limit and a current bookings count). This models real-world business rules (a trip can only be booked a certain number of times) instead of treating trip availability as unlimited.</li>
        <li><strong>Indexing for Performance:</strong> Added database indexes to optimize query performance. For example, each trip now has a unique index on its trip code (for fast look-ups by code), and other indexes on commonly queried fields like start date or resort name. These indexes ensure that as the dataset grows, read operations remain efficient and scalable.</li>
        <li><strong>New Bookings Collection:</strong> Introduced a dedicated <em>Bookings</em> collection to record when users book trips. Each booking record stores references to the user and trip, along with details like travel dates, number of guests, total price, status, and timestamps. To preserve historical data, each booking also stores a snapshot of key trip info at the time of booking (like trip name and price). This denormalization ensures that if a trip’s details change later, existing booking records remain meaningful.</li>
        <li><strong>Transactional Booking Operation:</strong> Implemented a safe two-step process for creating bookings. When a new booking is made, the system creates the booking entry and simultaneously updates the related trip’s booking count. This is done using an atomic operation (or a transaction where supported) to prevent race conditions. For example, the trip update uses a conditional increment to ensure we never exceed the maximum bookings limit – if two users try to book the last spot at the same time, only one will succeed, preventing overbooking. If any part of the process fails, changes are rolled back to maintain consistency.</li>
        <li><strong>Aggregation Report Endpoint:</strong> Added a new endpoint that uses MongoDB’s aggregation framework to generate a simple report (for instance, identifying the most-booked trips or total bookings per trip). This showcases an advanced database capability: letting the database perform data analysis (aggregation) and returning computed results, which is useful for administrative insights.</li>
      </ul>
      <p className="mb-4">
        These database enhancements make the application more robust and enterprise-ready. By enforcing schema rules and using transactions/atomic operations, the system now guards against data anomalies and inconsistencies. The introduction of a Bookings model with relational integrity and an aggregation query demonstrates a deeper understanding of database design beyond basic CRUD.
      </p>
      <p className="mb-4">
        From a learning perspective, this enhancement addressed the program outcomes related to applying well-founded tools/techniques (Outcome 4) and developing a security mindset (Outcome 5). Ensuring data integrity and consistency is a critical aspect of security – for example, preventing overbookings or corrupted data is not just a functional improvement but also builds user trust. I also practiced professional communication (Outcome 2) by thoroughly documenting these database design decisions and their rationale.
      </p>
      <p className="mb-4">
        <em>Reflection:</em> Working on the database layer taught me that database design is as much about planning for the future as it is about meeting current requirements. I learned to anticipate how data will be used and how things could go wrong (concurrent bookings, evolving data, etc.), and to put safeguards in place. This experience reinforced the importance of treating the database as a core component of the application’s architecture, not just a passive storage engine. By adding constraints, indexes, and multi-step operations, I’ve made Travlr Getaways more reliable and scalable, which is a key takeaway for my future projects.
      </p>
      <p className="mb-4">
        <strong>Code Links:</strong> For details, see the database-related code in the repositories: the schema and database logic in the <a href="https://github.com/Lawrence-Bonilla/CS465-fullstack" target="_blank" rel="noopener noreferrer">original project</a> versus the <a href="https://github.com/Lawrence-Bonilla/TravlrGetaways-enhanced" target="_blank" rel="noopener noreferrer">enhanced project</a>. The diffs show the added validation rules, new collections, and updated query logic implementing the above features.
      </p>
    </div>
  );
}

export default Databases;