import styled from 'styled-components'
//--------------------Header------------------------

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const NavBar = styled.ul`
    list-style: none;
    display: flex;
    gap: 40px;
`

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
`
//------------------------Corpo----------------------------