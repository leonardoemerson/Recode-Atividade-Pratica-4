import React from "react";
import "./style.css";

function Header(){
    return(
        <div id="container-fluid">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="menu">
            <div className="navbar-collapse collapsedual-collapse2 me-auto">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href = "/" >Início</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href = "/destinos">Destinos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href = "/clientes">Clientes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href = "/agencias">Agências</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/catalogo">Catálogo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/promocao">Promoções</a>
                    </li>
                    
                </ul>
            </div>
            <div className="navbar-collapse collapsedual-collapse2 mx-auto">
                <a className="navbar-brand " href="/"><img src="./images/logo2.jpg" className="logoSizes" alt="Logo" /></a>
            </div>
            <div className="navbar-collapse collapsedual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href = "/contatos">Contatos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Entrar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cadastro">Registre-se</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
}

export default Header;