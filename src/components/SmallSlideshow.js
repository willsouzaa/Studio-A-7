import React from 'react';
import styled from 'styled-components';

import Slide1 from '../Imagens/Slide1.png';
import Slide2 from '../Imagens/Slide2.png';
import Slide3 from '../Imagens/Slide3.png';

const SmallSlideshowContainer = styled.div`
  background-color: #2c2c2c;
  min-width: 100%;
  max-height: 50%; /* Altura do slideshow pequeno */
  overflow: hidden;
  position: relative;
`;

const Slide = styled.div`
  display: flex;
  width: 300%; /* Ajusta para caber os slides duplicados */
  animation: slideAnimation 30s linear infinite; /* Animação contínua */

  @keyframes slideAnimation {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); } /* Ajusta para o número de slides e a largura do contêiner */
  }
`;

const SlideImage = styled.img`
  width: calc(100% / 6); /* Calcula a largura do slide */
  height: 100%; /* Altura igual à altura do slideshow */
  object-fit: cover; /* Mantém a proporção e corta a imagem se necessário */
  margin: 10px; /* Remove margem */
  padding: 0; /* Remove padding */
  border: none; /* Remove borda */
`;

const SmallSlideshow = () => {
  return (
    <SmallSlideshowContainer>
      <Slide>
        <SlideImage src={Slide1} alt="Slide 1" />
        <SlideImage src={Slide2} alt="Slide 2" />
        <SlideImage src={Slide3} alt="Slide 3" />
        <SlideImage src={Slide1} alt="Slide 1" />
        <SlideImage src={Slide2} alt="Slide 2" />
        <SlideImage src={Slide3} alt="Slide 3" />
      </Slide>
    </SmallSlideshowContainer>
  );
};

export default SmallSlideshow;
