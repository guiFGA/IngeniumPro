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
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    color: #fff;
    margin-top: 100px;
    margin-left: 100px;
    margin-right: 100px;
`

export const Titulo = styled.div`
    display: flex;
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    text-align: center; /* Alinha o texto ao centro, se necessário */
`

export const Criacao = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Criadores = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    gap: 20px;
`

export const Botao = styled.button`
    margin-top: 150px;
    background-color: rgba(2, 188, 255, 0);
    color: white;
    width: 10vw;
    height: 5vh;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    border-image: linear-gradient(to left, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))1;
    transition: all 0.3s ease; /* Transição suave para o hover */

    &:hover {
        background-color: rgba(42, 131, 163, 0.2); /* Cor de fundo ao passar o mouse */
        border-color: rgba(2, 188, 255, 1); /* Alterar a cor da borda */
        transform: scale(1.05); /* Aumenta ligeiramente o tamanho do botão */
    }
`;

export const CentraBotao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LinhaMeio = styled.div`

`;