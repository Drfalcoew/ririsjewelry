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

ReactGA.initialize('G-KGT5LD5SZQ');

function App() {

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);
  return (
    <BrowserRouter>
      <UserSettingsProvider>
      <StyledGlobalStyles />
        <div className="App">
            <Header />
            <Drawer />
            <Routes>
              <Route path="/" Component={Home} />
            </Routes>
            <Footer />
        </div>
      </UserSettingsProvider>
    </BrowserRouter>
  );
}

export default App;
