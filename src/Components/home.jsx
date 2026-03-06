import React from 'react';
import '../App.css';
import './css/styles.css'; //imports local css
import Main from './main.jsx';
import Nav from './nav.jsx';
import Footer from './footer.jsx';

const Home = () => {
    return (
      <div>
        <main>
          <Nav />
          <Main />
        </main>
        <Footer/>
      </div>
    );
};

export default Home;
