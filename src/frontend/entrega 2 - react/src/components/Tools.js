import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import ferramentas3 from '../img/ferramentas3.jpeg';
import ferramentas from '../img/ferramentas.jpeg';
import ferramentas2 from '../img/ferramentas2.png';

const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  color: #004f42;
  background-color: #f5f5f5; 
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
  max-width: 400px;
  margin: 10px 0;
`;

const ToolCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 250px;
  margin: 10px 0;
  padding: 15px;

  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

const Content = styled.div`
  flex: 1;
  text-align: left;
`;

const ToolButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #11a88a;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004f42;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 1000px;
    height: auto;
    border-radius: 10px;
  }

  .image-1 {
    max-width: 600px;
  }

  .image-2 {
    max-width: 1000px;
  }

  .image-3 {
    max-width: 700px;
  }

`;

function Tools() {
  return (
    <Container>
      <Banner
        texto="PAINEL DE CONTROLE PESSOAL"
        texto2="Ferramentas Práticas para Gestão e Planejamento Financeiro"
        descricao="Explore soluções simples e poderosas para organizar suas finanças, acompanhar seus gastos e alcançar seus objetivos financeiros de forma eficaz."
      />
      <Section>
        <ToolCard reverse={false}>
          <Content>
            <SubTitle>DESCUBRA SEU PERFIL DE INVESTIDOR</SubTitle>
            <Paragraph>
              Permita alinhar expectativas e objetivos financeiros, garantindo decisões mais seguras e personalizadas.
            </Paragraph>
            <ToolButton href="/quiz">Quiz</ToolButton>
          </Content>
          <ImageContainer>
            <img src={ferramentas3} alt="Imagem ilustrativa sobre investimento"  className="image-1"/>
          </ImageContainer>
        </ToolCard>
      </Section>
      <Section>
        <ToolCard reverse={true}>
          <Content>
            <SubTitle>BAIXE SUA PLANILHA E PERSONALIZE!</SubTitle>
            <Paragraph>
              Organize suas finanças de forma prática com nossa planilha personalizada e fácil de usar.
            </Paragraph>
            <ToolButton href="https://download856.mediafire.com/yc4ndl7m2ydgBvEtCbXbFv1V_NH62tF4_NGNw0n4VjQjwRdj-lM70yKzKWcLVE_XRMojLg_tHU7ust-y9BC7iN7-ZSqK_ZYSGfYOzx4NBvU_ktGg8xCgwZhl3ETEWIMrc05-ShMXytNOa6rUExufTCDdwPZSceCC3Lx2EmKqu_oACfo/k20q7okxiy1x206/Planilha+Financeira.xlsx">Baixar</ToolButton>
          </Content>  
          <ImageContainer>
            <img src={ferramentas2} alt="Imagem ilustrativa sobre planilha" className="image-2" />
          </ImageContainer>
        </ToolCard>
      </Section>
      <Section>
        <ToolCard reverse={false}>
          <Content>
            <SubTitle>OTIMIZE SEUS GASTOS!</SubTitle>
            <Paragraph>
              Utilize nossa calculadora para Otimização de Gastos ou Redução de Dívidas.
            </Paragraph>
            <ToolButton href="/calculadora">Clique aqui</ToolButton>
          </Content>
          <ImageContainer>
            <img src={ferramentas} alt="Imagem ilustrativa sobre a calculadora" className="image-3"/>
          </ImageContainer>
        </ToolCard>
      </Section>
    </Container>
  );
}

export default Tools;
