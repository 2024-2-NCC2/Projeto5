import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  min-height: 100vh;
  color: #004f42;
`;

const Title = styled.h1`
  font-size: 2.5rem; 
  color: #004f42;
`;

const Section = styled.section`
  margin: 20px 0;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  color: #004f42;
  margin: 10px 0;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 800px;
  margin: 0 auto; 
`;

const ToolCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ToolButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #11a88a;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004f42;
  }
`;

function Tools() {
  return (
    <Container>
      <Title>Ferramentas</Title>
      <Paragraph>Aqui você encontrará várias ferramentas úteis para gerenciar suas finanças.</Paragraph>
      <Paragraph>Explore nossas planilhas, calculadoras e recursos que ajudam a otimizar sua gestão financeira.</Paragraph>

      <Section>
        <SubTitle>1. Calculadora de Máximos e Mínimos</SubTitle>
        <ToolCard>
          <Paragraph>Utilize nossa calculadora para Otmização de Gastos ou Redução de Dívidas.</Paragraph>
          <ToolButton href="/calculadora">Ir para a Calculadora</ToolButton>
        </ToolCard>
      </Section>

      <Section>
        <SubTitle>2. Planilha de Controle Financeiro</SubTitle>
        <ToolCard>
          <Paragraph>Baixe nossa planilha que ajuda você a controlar suas despesas e receitas mensais.</Paragraph>
          <ToolButton href="/planilha-controle">Baixar Planilha</ToolButton>
        </ToolCard>
      </Section>

      <Section>
        <SubTitle>3. Quiz Perfil de Investidor</SubTitle>
        <ToolCard>
          <Paragraph>Faça aqui seu quiz e descubra seu perfil de investidor</Paragraph>
          <ToolButton href="/quiz">Faça Aqui</ToolButton>
        </ToolCard>
      </Section>
    </Container>
  );
}

export default Tools;
