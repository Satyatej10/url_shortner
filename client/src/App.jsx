// src/App.jsx (remains mostly unchanged)
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormComponent from './FormComponent.jsx';
import AboutComponent from './About.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#000000]">
        {/* Navigation */}
        <nav className="bg-[#1a1a1a] p-4 sticky top-0 z-10">
          <ul className="flex justify-center gap-8">
            <li>
              <Link 
                to="/" 
                className="text-[#9333ea] hover:text-[#c084fc] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-[#9333ea] hover:text-[#c084fc] transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/about" element={<AboutComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;