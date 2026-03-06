import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import logo from './logo.svg';
import './App.css';
import './Components/css/styles.css'; //imports local css

//import Main from './components/main.jsx';
//import Nav from './components/nav.jsx';
//import Footer from './components/footer.jsx';
import Login from './Components/login.jsx';
//import HeadComponent from './components/headcomponent.jsx';
import Home from './Components/home.jsx';
import Dashboard from './Components/Dashboard.jsx';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/management" element={<Dashboard />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;
