import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  min-height: 100vh;
  color: #004f42;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #004f42;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

function Tools() {
  return (
    <Container>
      <Title>Ferramentas</Title>
      <Paragraph>Aqui você encontrará várias ferramentas úteis para gerenciar suas finanças.</Paragraph>
      <Paragraph>Explore nossas planilhas, calculadoras e recursos que ajudam a otimizar sua gestão financeira.</Paragraph>
    </Container>
  );
}

export default Tools;