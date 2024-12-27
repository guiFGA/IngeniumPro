import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
    width: 10vw;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const LoginLink = styled.a`
    text-decoration: none;
    color:#00D0FF;
`;

export const Corpo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 70vw;
    height: 70vh;
    border: 1px solid transparent;
    border-radius: 1rem;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1)) 1;
`

export const Esquerda = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;
    background-color: #040B10;
    width: 30vw;
    height: 65vh;
    flex-direction: column;
`

export const Direita = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #021016;
    width: 30vw;
    height: 65vh;
    border-radius: 1rem;
`

export const Form = styled.form`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 26vw;
    height: 60vh;
    border: 1px solid transparent;
    border-radius: 0.1em;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1)) 1;
    gap: 15px;
    margin-top: 2.5rem;
    padding-top: 3rem;

`

export const Inputs = styled.input`
    padding: 0.5rem;
    background-color: white;
    border: none;
    border-radius: 1rem;
    width: 16vw;
`

export const AjusteBotao = styled.div`
    display: flex;
    position: relative;
    margin-top: -10vh;
`