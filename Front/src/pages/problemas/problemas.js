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

export const Main = styled.main`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 60px;
`

export const Azul = styled.span`
    color: rgb(18, 154, 239);
`
export const Prob = styled.div`
    width: 15vw;
    height: 40vh;
    border: 2px solid transparent;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))10;
    display: flex;
    align-items: center;
    padding-left: 50px;


    img {
        max-width: 100%;
        max-height: 100%;
    }

    overflow: hidden; /* Evita que a imagem extrapole os limites da div */
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.1); /* Aumenta o tamanho da imagem ao passar o mouse */
        box-shadow: 0px 4px 15px rgba(2, 188, 255, 0.5); /* Adiciona um leve brilho */
    }
`

export const ProbDetrito = styled.div`
    width: 15vw;
    height: 40vh;
    border: 2px solid transparent;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))10;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding-top: 20px;

    img {
        max-width: 100%;
        max-height: 100%;
    }

    overflow: hidden; /* Evita que a imagem extrapole os limites da div */
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.1); /* Aumenta o tamanho da imagem ao passar o mouse */
        box-shadow: 0px 4px 15px rgba(2, 188, 255, 0.5); /* Adiciona um leve brilho */
    }
`

export const H1 = styled.h1`
    font-size: 2em;
`

export const Link = styled.a`
    text-decoration: none;
`

export const Branco = styled.span`
    color: #fff;
`