import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import SelfAssessment from './SelfAssessment';
import SoftwareDesign from './SoftwareDesign';
import Algorithms from './Algorithms';
import Databases from './Databases';
import CodeReview from './CodeReview';

function App() {
  return (
    <Router>
      {/* Container for page content with NavBar and Footer */}
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<SelfAssessment />} />
            <Route path="/software-design" element={<SoftwareDesign />} />
            <Route path="/algorithms" element={<Algorithms />} />
            <Route path="/databases" element={<Databases />} />
            <Route path="/code-review" element={<CodeReview />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;