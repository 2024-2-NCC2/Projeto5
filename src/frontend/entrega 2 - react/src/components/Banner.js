import React from 'react';
import styled from 'styled-components';
import bgImage from '../img/bg.jpeg';

const BannerContainer = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7); 
    z-index: 1;
  }

  h1, p {
    z-index: 2; 
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #004f42;
  margin-bottom: 20px; 
`;

const Paragraph = styled.p`
  font-size: 1.7rem; 
  color: #000;
  max-width: 800px; 
  line-height: 1.8; 
  margin: 0 auto; 
`;


function Banner({ id, texto, descricao }) {
  return (
    <BannerContainer id={id}>
      <Title>{texto}</Title>
      <Paragraph>{descricao}</Paragraph>
    </BannerContainer>
  );
}

export default Banner;
