import React from 'react';
import '../assets/styles.css';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <p>
                    © {new Date().getFullYear()} Aristocratic. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;