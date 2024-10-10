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

function Sucesso() {
  return (
    <Container>
      <Title>Cadastro realizado com sucesso!</Title>
      <Paragraph>Bem-vindo à nossa plataforma!</Paragraph>
      <Paragraph>Agradecemos por confiar na Finaq para gerenciar suas finanças.</Paragraph>
    </Container>
  );
}

export default Sucesso;