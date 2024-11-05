import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-logo">
                    <img 
                        src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-open-book-logo-png-image_12467719.png" 
                        alt="Logo" 
                        className="logo" 
                    />
                    <div className="footer-logo-text">
                        <p>EdiAleX</p>
                        <p>Generador de Historias Aleatorias</p>
                    </div>
                </div>
                <div className="footer-related">
                    <h3>Integrantes</h3>
                    <ul>
                        <li>Alexis Narea</li>
                        <li>Edisson Mendez</li>
                        <li>Alejandra Medranda</li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Redes Sociales</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" alt="Twitter" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-year">
                © 2007-2024 Instituto Tecnológico Sudamericano
            </div>
        </footer>
    );
};

export default Footer;
