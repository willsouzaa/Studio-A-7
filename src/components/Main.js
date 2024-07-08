import React from 'react';
import styled from 'styled-components';
import SmallSlideshow from './SmallSlideshow';
import apresentacao from '../Imagens/Apresentacao.png';
import segundaImagem from '../Imagens/Somos.png';
import PacotesContainer from './PacotesContainer';
import TermsAndConditions from './TermsAndConditions'; // Importe o novo componente

const MainContainer = styled.main`
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: -1rem;
  margin-top: 1rem;
  width: 100%;
  flex: 1;
  margin: 0px;

  @media screen and (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const Apresentacao = styled.img`
  width: 100%;
  height: auto;
`;

const SegundaImagem = styled.img`
  width: 100%;
  height: auto;
  margin-top: 0rem;
`;

const Main = () => {
  return (
    <MainContainer>
      <Apresentacao src={apresentacao} alt="Imagem de Apresentação" />
      <SegundaImagem src={segundaImagem} alt="Segunda Imagem" />
      <SmallSlideshow />
      <PacotesContainer />
      <TermsAndConditions /> {/* Adicione o componente aqui */}
    </MainContainer>
  );
};

export default Main;
