import api from '../../services/api'
import { useState } from 'react';
import logo from '../../assets/imagens/logo.svg'
import { NavBar, NavLinks, Nav } from './home';


//essa é a pagina raiz do nosso site
function Home(){



    return(
        <header>
            <Nav>
                <div className="logo">
                    <a href="http://localhost:5173/">
                        <img src={logo} alt="logo" />
                    </a>                    
                </div>
                <div className="links">
                    <NavBar>
                        <li><NavLinks href="http://localhost:5173/">Home</NavLinks></li>
                        <li><NavLinks href="http://localhost:5173/">Sobre</NavLinks></li>
                        <li><NavLinks href="http://localhost:5173/login">Entre</NavLinks></li>
                        <li><NavLinks href="http://localhost:5173/">Perfil</NavLinks></li>
                    </NavBar>
                </div>
            </Nav>
        </header>
    )


}

export default Home;