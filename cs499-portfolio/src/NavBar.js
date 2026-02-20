import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-teal-900 text-gray-100 px-4 py-3 flex items-center justify-between">
      {/* Site title / logo */}
      <div className="text-lg font-semibold">
        Lawrence Bonilla ePortfolio
      </div>
      {/* Navigation Links */}
      <div>
        <Link className="mx-2 hover:text-teal-300" to="/">Home</Link>
        <Link className="mx-2 hover:text-teal-300" to="/software-design">Software Design</Link>
        <Link className="mx-2 hover:text-teal-300" to="/algorithms">Algorithms</Link>
        <Link className="mx-2 hover:text-teal-300" to="/databases">Databases</Link>
        <Link className="mx-2 hover:text-teal-300" to="/code-review">Code Review</Link>
      </div>
    </nav>
  );
}

export default NavBar;