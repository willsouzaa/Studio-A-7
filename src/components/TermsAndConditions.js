import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.div`
  background-color: #fff;
  color: #333;
  padding: 2rem;
  border-radius: 8px;
  max-width: 95%;
  margin: 2rem auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  line-height: 1.6;
  font-size: 1em;

  p {
    margin-bottom: 1rem;
  }
`;

const TermsAndConditions = () => {
  return (
    <TermsContainer>
      <Title>Termos e Condições</Title>
      <Content>
        <p>Este é um texto de teste para os Termos e Condições. Por favor, insira aqui os termos reais do seu serviço.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna eu leo tristique elementum.</p>
        <p>Suspendisse potenti. Morbi nec tortor id urna tincidunt efficitur.</p>
      </Content>
    </TermsContainer>
  );
};

export default TermsAndConditions;
