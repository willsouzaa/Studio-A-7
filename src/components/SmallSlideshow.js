import React from 'react';
import styled from 'styled-components';

import Slide1 from '../Imagens/Slide1.png';
import Slide2 from '../Imagens/Slide2.png';
import Slide3 from '../Imagens/Slide3.png';

const SmallSlideshowContainer = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%; /* Altura do slideshow pequeno */
  overflow: hidden;
  position: relative;
`;

const Slide = styled.div`
  display: flex;
  width: 100%; /* Ajusta para caber os slides duplicados */
  animation: slideAnimation 90s linear infinite; /* Animação contínua */
  
  @keyframes slideAnimation {
    0% { transform: translateX(0); }
    100% { transform: translateX(-20%); } /* Ajusta para o número de slides e a largura do contêiner */
  }
`;

const SlideImage = styled.img`
  margin: 2px;
  flex: 1;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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
        <SlideImage src={Slide1} alt="Slide 1" />
        <SlideImage src={Slide2} alt="Slide 2" />
        <SlideImage src={Slide3} alt="Slide 3" />
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
