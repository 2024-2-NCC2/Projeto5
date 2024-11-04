import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;      
  justify-content: center;
  align-items: center;
  min-height: 100vh;           
  background-color: #f5f5f5;   
  text-align: center;          
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;    
  margin: 0;      
`;

const Message = styled.p`
  font-size: 1.5rem; 
  color: #555; 
  margin-top: 1rem; 
`;

function UnderConstruction() {
  return (
    <Container>
      <Title>Página em Desenvolvimento</Title>
      <Message>
        Estaremos utilizando o componente Hero como Home, até estruturarmos nossa nova home.
        Tivemos uma mudança de planos quanto ao layout.
      </Message>
    </Container>
  );
}

export default UnderConstruction;
