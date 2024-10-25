import React from 'react';
import styled from 'styled-components';
import { FaChartLine, FaLightbulb, FaCoins } from 'react-icons/fa'; 

const PilaresContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
`;

const Pilar = styled.div`
  text-align: center;
  max-width: 500px;

  h3 {
    margin: 10px 0;
    color: #004f42;
    font-size: 25px;
  }

  p {
    font-size:30px;
    color: #333;
  }
`;


function Pilares() {
  return (
    <PilaresContainer>
      <Pilar>
        <FaChartLine size={70} color="#004f42" />
        <h3>Crescimento Sustentável</h3>
        <p>Promover um crescimento contínuo e saudável do PIB.Isso implica em fomentar a inovação, gerar empregos e garantir um desenvolvimento sustentável</p>
      </Pilar>
      <Pilar>
        <FaLightbulb size={70} color="#004f42" />
        <h3>Inovação e Tecnologia</h3>
        <p>Promover atividades de alto valor agregado e soluções criativas. Isso envolve incentivar a inovação, a colaboração e a adaptação às novas demandas do consumidor, garantindo um crescimento sustentável e eficaz.</p>
      </Pilar>
      <Pilar>
        <FaCoins size={70} color="#004f42" />
        <h3>Desenvolvimento Econômico</h3>
        <p>Elevar a produtividade através da diversificação das economias.Ao diversificar setores e estimular novas indústrias, conseguimos reduzir a dependência de fontes tradicionais, promovendo inovação e gerando novas oportunidades de emprego</p>
      </Pilar>
    </PilaresContainer>
  );
}

export default Pilares;
