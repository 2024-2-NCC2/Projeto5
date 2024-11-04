import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';

const TipsContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  color: #004f42;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: 'Inter', sans-serif;
  margin-bottom: 10px;
  margin-top: 50px;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  font-weight: 200;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
  padding: 40px 50px;
  gap: 60px;
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 30px;                             
  padding: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;          
  }
`;

const TipItem = styled.article`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;                         
  height: 400px;                         
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);  
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
`;

const TipIcon = styled.span`
  font-size: 3rem;
  display: block;
  margin-bottom: 10px;
`;

const TipTitle = styled.h2`
  font-size: 1.8rem;
  color: #004f42;
  margin: 10px 0;
`;

const TipDescription = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const FinancialTips = () => {
  const tips = [
    {
      icon: "📊",
      title: "Faça um Orçamento Mensal",
      description: "Organize suas receitas e despesas mensais para ter uma visão clara de sua situação financeira. Utilize planilhas ou aplicativos para facilitar o controle.",
    },
    {
      icon: "💳",
      title: "Pague suas Contas em Dia",
      description: "Evite juros e multas pagas por atraso. Estabeleça lembretes para não esquecer as datas de vencimento das suas contas.",
    },
    {
      icon: "🛟",
      title: "Reserve um Fundo de Emergência",
      description: "Tenha pelo menos 3 a 6 meses de despesas guardados para imprevistos. Isso traz segurança e tranquilidade em situações inesperadas.",
    },
    {
      icon: "📚",
      title: "Invista em Conhecimento Financeiro",
      description: "Dedique tempo para aprender sobre finanças pessoais, investimentos e como gerenciar melhor seu dinheiro. Livros e cursos online podem ser ótimas fontes.",
    },
    {
      icon: "🛍️",
      title: "Evite Compras por Impulso",
      description: "Antes de fazer uma compra, reflita se realmente precisa do item e se ele está no seu orçamento. Dê um tempo antes de decidir.",
    },
    {
      icon: "🏦",
      title: "Conheça o Banco do Povo",
      description: "O Banco do Povo oferece microcrédito com taxas acessíveis para pequenos empreendedores. É uma excelente opção para quem quer iniciar ou expandir um negócio com pouco custo.",
    }
  ];

  return (
    <TipsContainer>
      <Banner
        texto="PENSAR EM UM TITULO"
        texto2="PENSAR SE DEIXA ESSA LINHA"
        descricao="PENSAR SE COLOCA TEXTO"
      />
      <Title>8 dicas de educação financeira para você transformar sua vida</Title>
      <Subtitle>A educação financeira é essencial para termos mais controle sobre nossa vida e alcançarmos segurança. Saber lidar com dinheiro vai além de economizar: trata-se de entender como ganhar, poupar e investir de forma consciente. No Brasil, o assunto ainda é pouco discutido e muitas vezes só abordado em momentos de crise, o que gera um conceito distorcido. Ter educação financeira é fundamental para tomar melhores decisões, evitar dívidas e garantir uma vida tranquila, independentemente da renda. Aqui, você encontra dicas para transformar sua relação com o dinheiro e construir um futuro mais estável.</Subtitle>
      <TipsGrid>
        {tips.map((tip, index) => (
          <TipItem key={index}>
            <TipIcon>{tip.icon}</TipIcon>
            <TipTitle>{tip.title}</TipTitle>
            <TipDescription>{tip.description}</TipDescription>
          </TipItem>
        ))}
      </TipsGrid>
    </TipsContainer>
  );
};

export default FinancialTips;
