import logo from './logo.svg';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router> <div>
    <Routes>
      <Route path="portfolio/" element={<Home />} />
      <Route path="portfolio/about" element={<About />} />
      <Route path="portfolio/contact" element={<Contact />} />
      <Route path="portfolio/portfolio" element={<Portfolio />} />
    </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
