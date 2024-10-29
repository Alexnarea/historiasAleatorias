import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-logo">
                    <img src="/path/to/logo.png" alt="Logo" className="logo" />
                    <p>Nam accumsan metus tortorujnjnjgfdcsxxdcfgvbhnjmnhbgvf.</p>
                </div>
                <div className="footer-related">
                    <h3>Temas relacionados</h3>
                    <ul>
                        <li>Tema 1</li>
                        <li>Tema 2</li>
                        <li>Tema 3</li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Datos del grupo</h3>
                    <p>holiiii.mena@gmail.com</p>
                    <p>0 87654321</p>
                    <p>parque sanblas - Pueblo Libre</p>
                    <p>Ecuador-Cuenca</p>
                </div>
                <div className="footer-social">
                    <h3>Redes Sociales</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/path/to/facebook-icon.png" alt="Facebook" /> //src/assets/icons/
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/path/to/twitter-icon.png" alt="Twitter" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/path/to/instagram-icon.png" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
