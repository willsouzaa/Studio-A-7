import React from 'react';
import styled from 'styled-components';
import logo from '../Imagens/Logo.png';

const HeaderContainer = styled.header`
  background-color: #000;
  color: white;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`;

const Logo = styled.img`
  height: auto;
  max-height: 100px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%; /* Garante que o contêiner de navegação ocupe toda a largura disponível */
  height: 100%;
`;

const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    color: white;
    text-decoration: none;
    margin: 0.5rem;
    padding: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
      <Logo src={logo} alt="Logo" />
        <Nav>
          <a href="#inicio">Início</a>
          <a href="#entidade">Entidade</a>
          <a href="#termos">Termos e Condições</a>
        </Nav>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
