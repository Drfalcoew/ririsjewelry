import React from 'react';
import './App.css';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StyledGlobalStyles from './GlobalStyles';
import { UserSettingsProvider } from './common/UserSettingsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Drawer from './components/Drawer/Drawer';
import Products from './components/Products/Products';
import Banner from './components/Banner';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import ProductDetails from './components/Products/ProductDetails';

// ReactGA.initialize('G-KGT5LD5SZQ');

function App() {

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);
  return (
    <BrowserRouter>
      <UserSettingsProvider>
      <StyledGlobalStyles />
        <div className="App">
            <Banner />
            <Header />
            <Drawer />
            <div className="app-content-container">
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/products" Component={Products} />
                <Route path="/about" Component={About} />
                <Route path="/contact" Component={Contact} />
                <Route path="product/:id" Component={ProductDetails} />
              </Routes>
            </div>
            <Footer />
        </div>
      </UserSettingsProvider>
    </BrowserRouter>
  );
}

export default App;
