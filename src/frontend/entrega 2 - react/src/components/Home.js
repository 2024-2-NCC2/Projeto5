import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Banner = styled.div`
  background-image: url('/your-banner-image.jpg'); /* Substitua pela imagem do banner */
  background-size: cover;
  background-position: center;
  color: white;
  padding: 60px 20px;
  text-align: center;
`;

const BannerTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const BannerSubtitle = styled.p`
  font-size: 1.2rem;
`;

const Section = styled.section`
  margin: 40px 0;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SectionContent = styled.div`
  flex: 1;
  margin: 0 20px;
`;

const SectionImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #004f42;
  margin-bottom: 15px;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 20px;
`;

const Button = styled.a`
  display: inline-block;
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

function AboutUs() {
  return (
    <PageContainer>
      <ContentContainer>
        <Banner>
          <BannerTitle>SOBRE NÓS</BannerTitle>
          <BannerSubtitle>Transformando Suas Finanças, Conquistando Seu Futuro</BannerSubtitle>
          <BannerSubtitle>
            Oferecemos orientação financeira personalizada para que você possa alcançar seus objetivos com segurança e confiança.
          </BannerSubtitle>
        </Banner>

        {/* Sessão "Descubra Seu Perfil de Investidor" */}
        <Section>
          <SectionContent>
            <SectionTitle>Descubra Seu Perfil de Investidor</SectionTitle>
            <SectionDescription>
              Permita alinhar expectativas e objetivos financeiros, garantindo decisões mais seguras e personalizadas.
            </SectionDescription>
            <Button href="/quiz">ENTER</Button>
          </SectionContent>
          <SectionImage src="/images/investidor.jpg" alt="Descubra Seu Perfil de Investidor" /> {/* Imagem da seção */}
        </Section>

        {/* Sessão "Baixe Sua Planilha Personalizada" */}
        <Section>
          <SectionImage src="/images/planilha.jpg" alt="Baixe Sua Planilha Personalizada" />
          <SectionContent>
            <SectionTitle>Baixe Sua Planilha Personalizada!</SectionTitle>
            <SectionDescription>
              Organize suas finanças de forma prática com nossa planilha personalizada e fácil de usar.
            </SectionDescription>
            <Button href="/planilha-controle">Baixar</Button>
          </SectionContent>
        </Section>

        {/* Sessão "Dicas Práticas Para Você" */}
        <Section>
          <SectionContent>
            <SectionTitle>Dicas Práticas Para Você!</SectionTitle>
            <SectionDescription>
              Aprenda estratégias simples e eficazes para administrar melhor seu dinheiro e alcançar seus objetivos financeiros.
            </SectionDescription>
            <Button href="/ferramentas">ENTER</Button>
          </SectionContent>
          <SectionImage src="/images/dicas.jpg" alt="Dicas Práticas Para Você" />
        </Section>
      </ContentContainer>
    </PageContainer>
  );
}

export default AboutUs;
