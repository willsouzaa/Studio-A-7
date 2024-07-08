import React from 'react';
import styled from 'styled-components';
import SmallSlideshow from './SmallSlideshow';
import apresentacao from '../Imagens/Apresentacao.png';
import segundaImagem from '../Imagens/Somos.png';
import PacotesContainer from './PacotesContainer'; // Verifique se o caminho está correto

const MainContainer = styled.main`
  background-color: #2c2c2c;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 0;
  margin-top: 1rem;
  width: 100%; /* Define a largura como 100% */
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
    </MainContainer>
  );
};

export default Main;
