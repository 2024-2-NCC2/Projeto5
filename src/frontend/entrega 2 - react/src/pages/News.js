import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';

const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  color: #004f42;
  background-color: #f5f5f5; 
`;


function News() {
  return (
    <Container>
      <Banner
       texto= "NEGÓCIOS GLOBAIS, POLÍTICA E MUITO MAIS!"
       descricao= "Confira as últimas notícias financeiras globais, com atualizações sobre mercados, economia e investimentos. Acompanhe as tendências econômicas que impactam o cenário global."/>
    </Container>
  );
}

export default News;