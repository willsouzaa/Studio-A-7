import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  height: 100px; /* Aumenta a altura */
  position: relative; /* Para manter o footer no final da página */
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Will Souza</p>
    </FooterContainer>
  );
};

export default Footer;
