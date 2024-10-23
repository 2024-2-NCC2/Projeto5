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

const Explanation = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #555;
`;

const Discrimination = styled.div`
  text-align: left; 
  margin-top: 10px;
  
`;

const DiscriminationItem = styled.p`
  margin: 5px 0; /* Espaçamento entre itens */
  font-size: 0.9rem; /* Tamanho do texto da discriminação */
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

    setResults({ optimizedSpending, budgetAmount, fixedExpenses, savingsAmount, remainingBudget });
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
            <p>Alimentação: R$ {results.optimizedSpending.food.toFixed(2)}</p>
            <Explanation>
              Sugerimos que você destine até 20% do seu orçamento para alimentação. O valor sugerido foi baseado em suas despesas fixas e na necessidade de manter uma boa nutrição.
            </Explanation>
            <Discrimination>
              <DiscriminationItem>Orçamento Total: R$ {results.budgetAmount.toFixed(2)}</DiscriminationItem>
              <DiscriminationItem>Despesas Fixas: R$ {results.fixedExpenses.toFixed(2)}</DiscriminationItem>
              <DiscriminationItem>Poupança (10%): R$ {results.savingsAmount.toFixed(2)}</DiscriminationItem>
              <DiscriminationItem>Orçamento Restante: R$ {results.remainingBudget.toFixed(2)}</DiscriminationItem>
            </Discrimination>
            <p>Transporte: R$ {results.optimizedSpending.transport.toFixed(2)}</p>
            <Explanation>
              Para transporte, recomenda-se alocar até 15% do seu orçamento. O valor sugerido aqui visa minimizar custos enquanto mantém eficiência nos deslocamentos diários.
            </Explanation>
            <p>Lazer: R$ {results.optimizedSpending.leisure.toFixed(2)}</p>
            <Explanation>
              É importante reservar até 10% do orçamento para lazer, evitando que essa categoria ultrapasse limites que possam comprometer outros gastos essenciais.
            </Explanation>
            <p>Poupança (10%): R$ {(results.budgetAmount * 0.1).toFixed(2)}</p>
            <Explanation>
              Recomendamos que pelo menos 10% do orçamento seja destinado à poupança ou investimentos, assegurando um planejamento financeiro saudável a longo prazo.
            </Explanation>
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
