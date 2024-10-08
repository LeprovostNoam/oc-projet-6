import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/css/main.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
