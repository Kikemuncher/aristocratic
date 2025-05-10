import React, { useState, useEffect } from 'react';
import '../assets/styles.css';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className={`header${scrolled ? ' scrolled' : ''}`} style={scrolled ? {padding: '12px 0', backgroundColor: 'rgba(0,0,0,0.9)'} : {}}>
            <div className="logo" style={{justifyContent: 'center'}}>
                <span className="logo-text">Aristocratic</span>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;