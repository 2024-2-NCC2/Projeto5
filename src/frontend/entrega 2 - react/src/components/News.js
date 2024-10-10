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

function News() {
  return (
    <Container>
      <Title>Notícias</Title>
      <Paragraph>Acompanhe as últimas notícias sobre finanças e investimentos.</Paragraph>
      <Paragraph>Fique por dentro das atualizações e insights que podem ajudar você a gerenciar melhor suas finanças.</Paragraph>
    </Container>
  );
}

export default News;