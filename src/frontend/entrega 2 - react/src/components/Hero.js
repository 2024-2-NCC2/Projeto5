import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

const HeroContainer = styled.section`
 display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 2%;
  flex-direction: flex; 
  text-align: center; 
  min-height: 100vh; /* Garante que a seção ocupe a altura total da tela */
  background: linear-gradient(130deg, #002D21 15%, #9BDDC1 58%, #027553 80%); /* Gradiente como fundo */
  color: white;

`;

const Content = styled.div`
  margin-bottom: 2rem; /* Adiciona espaço abaixo do conteúdo */
`;

const Heading = styled.h1`
  font-size: 2.5rem; /* Tamanho do texto principal */
  margin-bottom: 1rem; /* Espaço abaixo do título */

  @media (max-width: 768px) {
    font-size: 2rem; /* Ajusta o tamanho para telas menores */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Ajusta ainda mais para telas pequenas */
  }
`;

const Paragraph = styled.p`
  font-size: 1.5rem; /* Tamanho do texto do parágrafo */
  line-height: 1.6; /* Espaçamento entre linhas */
  max-width: 600px; /* Limita a largura máxima do parágrafo */
  margin: 0 auto; /* Centraliza o parágrafo */
  
  @media (max-width: 768px) {
    font-size: 1.2rem; /* Ajusta o tamanho para telas menores */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Ajusta ainda mais para telas pequenas */
  }
`;

const FormContainer = styled.div`
  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
    margin-left: -55px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 350px;
  padding: 0;
  background: none;
`;

const StyledInput = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 1rem;
  width: 45vw; 
  max-width: 600px;
  margin-left: auto;
  margin-left: -150px;

  &::placeholder {
    color: white;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid #FFFF;
  color: white;
  padding: 0.8rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  width: auto;
  transition: all 0.3s ease;
  margin-top: 10px;
  margin-left: -50px;

  &:hover {
    background-color: #fff;
    color: #004f42;
  }
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: center; 
  gap: 1rem; 
  margin-left: -50px;
`;
const SocialLink = styled.a`
  img {
    width: 30px; 
    height: auto; 
  }
`;
const Login = styled.div`
  text-align: center;

  p {
    font-size: 14px;
    margin-bottom: 10px;
    margin-left: -50px;
  }
`;

function Hero() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const passwordInput = form.querySelector('input[type="password"]:nth-child(5)');
    const confirmPasswordInput = form.querySelector('input[type="password"]:nth-child(6)');

    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("As senhas não coincidem. Tente novamente.");
      return;
    }

    const emailInput = form.querySelector('input[type="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    alert("Cadastro realizado com sucesso!");
    form.reset();
    navigate('/sucess');
  };

  return (
    <HeroContainer>
       <Content>
        <Heading>Empoderando você financeiramente!</Heading>
        <Paragraph>
          Domine suas finanças com conteúdos educativos, planilhas personalizadas e interações que estimulam investimentos.
        </Paragraph>
      </Content>
      <FormContainer>
        <h2>Crie uma conta</h2>
        <StyledForm id="formCadastro" onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Nome completo" required />
          <StyledInput type="email" placeholder="E-mail" required />
          <StyledInput type="tel" placeholder="Telefone" required />
          <StyledInput type="date" placeholder="Data de nascimento" required />
          <StyledInput type="password" placeholder="Criar senha" required />
          <StyledInput type="password" placeholder="Confirmar senha" required />
          <Login>
            <p>Já tem uma conta? Conecte-se</p>
            <SocialLogin>
              <SocialLink href="#"><img src="/facebook.png" alt="Facebook" /></SocialLink>
              <SocialLink href="#"><img src="/linkedin.png" alt="LinkedIn" /></SocialLink>
              <SocialLink href="#"><img src="/gmail.png" alt="Gmail" /></SocialLink>
            </SocialLogin>
          </Login>
          <StyledButton type="submit">Começar</StyledButton>
        </StyledForm>
      </FormContainer>
    </HeroContainer>
  );
}

export default Hero;
