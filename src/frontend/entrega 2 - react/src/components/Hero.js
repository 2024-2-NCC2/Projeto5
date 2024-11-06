import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

const HeroContainer = styled.section`
 display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 2%;
   flex-direction: flex; 
   text-align: center; 
   min-height: 100vh; 
   background: linear-gradient(130deg, #002D21 15%, #9BDDC1 58%, #027553 80%); 
   color: white;
 `;
 const Content = styled.div`
   margin-bottom: 2rem; 
 `;
 const Heading = styled.h1`
   font-size: 2.5rem; 
   margin-bottom: 1rem; 

   @media (max-width: 768px) {
     font-size: 2rem; 
   }
   @media (max-width: 480px) {
     font-size: 1.5rem; 
   }

 `;

 const Paragraph = styled.p`
   font-size: 1.5rem; 
   line-height: 1.6; 
   max-width: 600px; 
   margin: 0 auto; 

   @media (max-width: 768px) {
     font-size: 0.2rem; 
   }
   @media (max-width: 480px) {
     font-size: 0.1rem; }
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

const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  right: -90px; 
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
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
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const passwordInput = form.querySelector('input[name="password"]');
    const confirmPasswordInput = form.querySelector('input[name="confirmPassword"]');

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
    navigate('/Home');
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
          
          <PasswordContainer>
            <StyledInput
              type={showPassword ? "text" : "password"}
              placeholder="Criar senha"
              name="password"
              required
            />
            <TogglePasswordButton onClick={handleTogglePassword} type="button">
              {showPassword ? "Ocultar" : "Mostrar"}
            </TogglePasswordButton>
          </PasswordContainer>
          
          <PasswordContainer>
            <StyledInput
              type={showPassword ? "text" : "password"}
              placeholder="Confirmar senha"
              name="confirmPassword"
              required
            />
            <TogglePasswordButton onClick={handleTogglePassword} type="button">
              {showPassword ? "Ocultar" : "Mostrar"}
            </TogglePasswordButton>
          </PasswordContainer>

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