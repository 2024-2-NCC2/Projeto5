import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-image: url('/path/to/your/background-image.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: white;
`;

const PillarsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const Pillar = styled.div`
  flex: 1;
  margin: 0 10px;
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  color: black;
`;

const SubTitle = styled.h2`
  color: black;
`;

const PillarTitle = styled.h3`
  color: black;
`;

const Paragraph = styled.p`
  color: black;
`;

function AboutUs() {
  return (
    <Container>
      <Title>Sobre Nós</Title>
      <Paragraph>
        Transformando Suas Finanças, Conquistando Seu Futuro
      </Paragraph>
      <Paragraph>
        Oferecemos orientação financeira personalizada para que você possa alcançar seus objetivos com segurança e confiança.
      </Paragraph>

      <SubTitle>Nossos Pilares</SubTitle>
      <PillarsContainer>
        <Pillar>
          <PillarTitle>Crescimento Sustentável</PillarTitle>
          <Paragraph>Promover um crescimento contínuo e saudável do PIB.</Paragraph>
        </Pillar>
        <Pillar>
          <PillarTitle>Inovação e Tecnologia</PillarTitle>
          <Paragraph>Promover atividades de alto valor agregado e soluções criativas para enfrentar desafios econômicos.</Paragraph>
        </Pillar>
        <Pillar>
          <PillarTitle>Desenvolvimento Econômico</PillarTitle>
          <Paragraph>Elevar a produtividade através da diversificação das economias.</Paragraph>
        </Pillar>
      </PillarsContainer>

      <SubTitle>Objetivo</SubTitle>
      <Paragraph>
        Nossa missão é mudar a forma como você enxerga e gerencia seu dinheiro. Acreditamos que o caminho para a prosperidade começa com um planejamento estratégico e uma visão clara do futuro.
      </Paragraph>
    </Container>
  );
}

export default AboutUs;
