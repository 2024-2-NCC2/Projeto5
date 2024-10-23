import React from 'react';
import styled from 'styled-components';


const TipsContainer = styled.div`
  padding: 20px;
  text-align: center;
  color: #004f42;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const TipItem = styled.article`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const TipTitle = styled.h2`
  font-size: 1.8rem;
  color: #004f42;
`;

const TipDescription = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const FinancialTips = () => {
  const tips = [
    {
      title: "Faça um Orçamento Mensal",
      description: "Organize suas receitas e despesas mensais para ter uma visão clara de sua situação financeira. Utilize planilhas ou aplicativos para facilitar o controle."
    },
    {
      title: "Pague suas Contas em Dia",
      description: "Evite juros e multas pagas por atraso. Estabeleça lembretes para não esquecer as datas de vencimento das suas contas."
    },
    {
      title: "Reserve um Fundo de Emergência",
      description: "Tenha pelo menos 3 a 6 meses de despesas guardados para imprevistos. Isso traz segurança e tranquilidade em situações inesperadas."
    },
    {
      title: "Invista em Conhecimento Financeiro",
      description: "Dedique tempo para aprender sobre finanças pessoais, investimentos e como gerenciar melhor seu dinheiro. Livros e cursos online podem ser ótimas fontes."
    },
    {
      title: "Evite Compras por Impulso",
      description: "Antes de fazer uma compra, reflita se realmente precisa do item e se ele está no seu orçamento. Dê um tempo antes de decidir."
    },
  ];

  return (
    <TipsContainer>
      <Title>Dicas Financeiras</Title>
      {tips.map((tip, index) => (
        <TipItem key={index}>
          <TipTitle>{tip.title}</TipTitle>
          <TipDescription>{tip.description}</TipDescription>
        </TipItem>
      ))}
    </TipsContainer>
  );
};

export default FinancialTips;
