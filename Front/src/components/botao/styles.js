import styled from 'styled-components';

export const Botao = styled.button`
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
