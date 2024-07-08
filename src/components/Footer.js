import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 1rem;
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  flex: 1;
  min-width: 150px;
  margin: 1rem;

  h3 {
    border-bottom: 1px solid #555;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: white;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  border-top: 1px solid #555;
  padding-top: 1rem;
  width: 100%;
  max-width: 1200px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <Section>
          <h3>Produtos</h3>
          <ul>
            <li><a href="#templates">Templates</a></li>
            <li><a href="#loja-virtual">Loja virtual</a></li>
            <li><a href="#blog">Blog A7</a></li>
          </ul>
        </Section>
        <Section>
          <h3>Central de Ajuda</h3>
          <ul>
            <li><a href="#ajuda">Central de Ajuda</a></li>
            <li><a href="#sala-de-imprensa">Sala de imprensa</a></li>
          </ul>
        </Section>
        <Section>
          <h3>Sobre</h3>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Fale conosco</a></li>
            <li><a href="#termos-de-uso">Termos de Uso</a></li>
            <li><a href="#politica-de-privacidade">Política de Privacidade</a></li>
          </ul>
        </Section>
      </FooterSection>
      <FooterBottom>
        <p>© 2006-2024 Designer A 7.com</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
