import styled from 'styled-components'
//--------------------Header------------------------

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const NavBar = styled.ul`
    list-style: none;
    display: flex;
    gap: 40px;
`;

export const NavLinks = styled.a`
    padding-left: 20px;
    color: #fff;
    text-decoration: none;
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color:rgb(18, 154, 239);
        position: absolute;
        bottom: -5px;
        left: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;    
    }

    &:hover::after {
        transform: scaleX(1); 
    }
`;
//------------------------Corpo----------------------------

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o botão horizontalmente */
    justify-content: space-between;
    width: 100%;
    min-height: 100vh; /* Preenche a altura da viewport */
    padding: 100px;
    margin-top: 3vh;
`;

export const Azul = styled.span`
    color: #00D0FF;
`;

export const TextoEsquerda = styled.div`
    color: #fff;
    flex: 1;
    text-align: left;
    width: 75%; 
    font-size: 19px;
`;

export const TextoDireita = styled.div`
    color: #fff;
    flex: 1;
    text-align: right;
    width: 75%;
    font-size: 19px;
`;

export const BemVindo = styled.span`
    color: #00D0FF;
    font-size: 25px;    
`;

export const Botao = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;


`;