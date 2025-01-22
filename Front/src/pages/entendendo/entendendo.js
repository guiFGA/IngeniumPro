import styled from "styled-components";

//-------------------Header--------------------
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

export const Azul = styled.span`
    color: rgb(18, 154, 239);
`;


//--------------Main--------------
export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`
//---------------Caixa---------------
export const Caixa = styled.div`
    width: 70vw;
    height: 100%;
    border: 1px solid transparent;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))10;
    display: flex;
    flex-direction: column;
    padding: 70px;
    gap: 50px;
    background-color: rgba(4, 11, 16, 1);
    box-shadow: 1.5px 2px 3px black;
`

export const Topo = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;

`

export const Titulo = styled.h1`
    font-size: 40px;

    @media (max-width: 1000px) {
        font-size: 30px  ; /* Ajusta o tamanho em telas menores */
    }

    @media (max-width: 480px) {
        font-size: 25px;
    }
`

export const Linha = styled.div`
    width: 100%;
    height: 1px;
    background-color: #fff;
`
//-------------Textos-------------

export const Textos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;  
`
export const Referencia = styled.a`
    text-decoration: none;
    color:  rgba(2, 188, 255, 1);
`

