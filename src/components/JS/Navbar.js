import React from 'react';
import '../CSS/Navbar.css'; // Importa o CSS personalizado

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
            <a className="navbar-brand" href="/">Emanuel Sales</a>  // Linha 8 - Página inicial do site
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="/principal">Principal</a>  // Linha 12 - Página Principal
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contato">Contato</a>  // Linha 15 - Página de Contato
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/experiencias">Experiências</a>  // Linha 18 - Página de Experiências
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
