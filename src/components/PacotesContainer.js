import React from 'react';
import styled from 'styled-components';
import bannerImage from '../Imagens/Banner.png'; // Ajuste o caminho conforme necessário
import Pacote1Image from '../Imagens/Pacote1.jpg'; // Importando a imagem do pacote 1
import Pacote2Image from '../Imagens/Pacote1.jpg'; // Importando a imagem do pacote 2

const PacotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  background-color: #000;
  width: 100%;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const PacotesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const PacoteCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 40%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const PacoteImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PacoteInfo = styled.div`
  padding: 16px;
`;

const PacoteTitle = styled.h2`
  font-size: 1.5em;
  margin: 0 0 10px;
`;

const PacoteDescription = styled.p`
  color: #555;
  margin: 0 0 10px;
`;

const PacotePrice = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: #e91e63;
`;

const PacotesContainer = () => {
  const pacotes = [
    {
      title: 'Pacote 1',
      description: 'Descrição do Pacote 1',
      price: 'R$ 100,00',
      imageUrl: Pacote1Image
    },
    {
      title: 'Pacote 2',
      description: 'Descrição do Pacote 2',
      price: 'R$ 200,00',
      imageUrl: Pacote2Image
    },
    // Adicione mais pacotes conforme necessário
  ];

  return (
    <PacotesWrapper>
      <BannerImage src={bannerImage} alt="Banner" />
      <PacotesGrid>
        {pacotes.map((pacote, index) => (
          <PacoteCard key={index}>
            <PacoteImage src={pacote.imageUrl} alt={pacote.title} />
            <PacoteInfo>
              <PacoteTitle>{pacote.title}</PacoteTitle>
              <PacoteDescription>{pacote.description}</PacoteDescription>
              <PacotePrice>{pacote.price}</PacotePrice>
            </PacoteInfo>
          </PacoteCard>
        ))}
      </PacotesGrid>
    </PacotesWrapper>
  );
};

export default PacotesContainer;
