import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../Imagens/Logo.png';

const HeaderContainer = styled.header`
  background-color: #000;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  transform: translateY(${props => (props.isVisible ? '0' : '-100%')});
  transition: transform 0.3s ease;
  z-index: 1000;
`;

const Logo = styled.img`
  height: auto;
  max-height: 100px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  width: 40%; /* Garante que o contêiner de navegação ocupe toda a largura disponível */
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <HeaderContainer
      isVisible={isVisible}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(window.scrollY < lastScrollY)}
    >
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
