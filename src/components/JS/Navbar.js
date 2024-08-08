import React from 'react';
import '../CSS/Navbar.css'; // Importa o CSS personalizado

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
            <a className="navbar-brand" href="#">Emanuel Sales</a>
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Principal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contato</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Experiências</a>
                        </li>
                    </ul>
                </div>
                    <span className="navbar-text">
                        Bem-vindo ao meu site pessoal!
                    </span>
            </div>
        </nav>
    );
};

export default Navbar;
