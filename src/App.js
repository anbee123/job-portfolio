import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="portfolio/" element={<Home />} />
          <Route path="portfolio/about" element={<About />} />
          <Route path="portfolio/contact" element={<Contact />} />
          <Route path="portfolio/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
