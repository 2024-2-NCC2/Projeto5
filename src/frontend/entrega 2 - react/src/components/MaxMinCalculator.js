import React, { useState } from 'react';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
  padding: 20px;
  text-align: center;
  color: #004f42;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Section = styled.section`
  margin: 20px 0;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  color: #004f42;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #11a88a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004f42;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #333;
`;

function MaxMinCalculator() {
  const [budget, setBudget] = useState('');
  const [expenses, setExpenses] = useState('');
  const [results, setResults] = useState(null);

  const handleOptimization = (e) => {
    e.preventDefault();
    const budgetAmount = parseFloat(budget);
    const fixedExpenses = parseFloat(expenses);
    const savingsAmount = budgetAmount * 0.1; 
    const remainingBudget = budgetAmount - fixedExpenses - savingsAmount;

    const recommendations = {
      food: { min: 800, max: 1000 },
      transport: { max: 500 },
      leisure: { max: 300 },
    };

    const optimizedSpending = {
      food: Math.min(remainingBudget * 0.4, recommendations.food.max),
      transport: Math.min(remainingBudget * 0.2, recommendations.transport.max),
      leisure: Math.min(remainingBudget * 0.1, recommendations.leisure.max),
    };

    setResults(optimizedSpending);
  };

  const handleClear = () => {
    setBudget('');
    setExpenses('');
    setResults(null);
  };

  return (
    <CalculatorContainer>
      <Title>Calculadora de Máximos e Mínimos</Title>

      <Section>
        <SubTitle>Otimização de Gastos</SubTitle>
        <Input 
          type="number" 
          placeholder="Orçamento Total Mensal (R$)" 
          value={budget} 
          onChange={(e) => setBudget(e.target.value)} 
          required 
        />
        <Input 
          type="number" 
          placeholder="Despesas Fixas (R$)" 
          value={expenses} 
          onChange={(e) => setExpenses(e.target.value)} 
          required 
        />
        <Button onClick={handleOptimization}>Calcular Gastos Ideais</Button>
        <Button onClick={handleClear} style={{ marginLeft: '10px' }}>Limpar</Button>

        {results && (
          <Result>
            <p>Gastos Sugeridos:</p>
            <p>Alimentação: R$ {results.food.toFixed(2)}</p>
            <p>Transporte: R$ {results.transport.toFixed(2)}</p>
            <p>Lazer: R$ {results.leisure.toFixed(2)}</p>
            <p>Poupança (10%): R$ {(budget * 0.1).toFixed(2)}</p> {/* Exibe o valor da poupança */}
          </Result>
        )}
      </Section>

      <Section>
        <SubTitle>Redução de Dívidas</SubTitle>
        <p>Funcionalidade em breve!</p>
      </Section>
    </CalculatorContainer>
  );
}

export default MaxMinCalculator;
