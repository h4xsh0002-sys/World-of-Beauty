import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// CSS
import './app.css';

// Components
import Img from './component/Img';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

// Pages
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div id="m">
      
        <Img />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      
    </div>
  );
}

export default App;