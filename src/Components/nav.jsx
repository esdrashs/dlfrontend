import react, { useEffect, useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalContext';
import './css/styles.css'; //imports local css
import dlDarkLogo from './Images/dl-dark.png';


const Nav = () => {
    const [isDarkBackground, setIsDarkBackground] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('mainNav');
            if (!navbar) return;

            // Get the current scroll position
            const scrollPosition = window.scrollY;
            
            // Check if we're in a dark-background section
            // Adjust navbar styling based on position
            if (scrollPosition > window.innerHeight * 0.5) {
                // If scrolled past the masthead, use light navbar
                setIsDarkBackground(false);
                navbar.style.backgroundColor = '#fff';
                navbar.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
            } else if (scrollPosition > 50) {
                // On masthead area, use dark navbar
                setIsDarkBackground(true);
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                navbar.style.boxShadow = 'none';
            } else {
                // Default
                setIsDarkBackground(true);
                navbar.style.backgroundColor = 'transparent';
                navbar.style.boxShadow = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { activeUser } = useContext(GlobalContext);
    const userLabel = activeUser && activeUser.email ? activeUser.email.split('@')[0] : 'Login';
    const userLink = activeUser ? '#/dashboard' : '#/login';

    return <nav 
        className="navbar navbar-expand-lg navbar-light fixed-top py-3" 
        id="mainNav"
        style={{
            transition: 'all 0.3s ease',
            backgroundColor: 'transparent'
        }}
    >
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#page-top" style={{color: isDarkBackground ? '#fff': '#212529'}}><img src={dlDarkLogo} width="30" height="30" className="d-inline-block align-top" alt="DL AppStudio"/>  DL AppStudio</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item"><a className="nav-link" href="#page-top" style={{color: isDarkBackground ? '#fff': '#212529'}}>Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#services" style={{color: isDarkBackground ? '#fff': '#212529'}}>Soluções</a></li>
                    <li className="nav-item"><a className="nav-link" href="#support" style={{color: isDarkBackground ? '#fff': '#212529'}}>Suporte</a></li>
                    <li className="nav-item"><a className="nav-link" href="#portfolio" style={{color: isDarkBackground ? '#fff': '#212529'}}>Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about" style={{color: isDarkBackground ? '#fff': '#212529'}}>Sobre nós</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact" style={{color: isDarkBackground ? '#fff': '#212529'}}>Fale Connosco</a></li>
                    <li className="nav-item"><a className="nav-link" href={userLink} style={{color: isDarkBackground ? '#fff': '#212529'}}>{userLabel}</a></li>
                </ul>
            </div>
        </div>
    </nav>;   
};

export default Nav;