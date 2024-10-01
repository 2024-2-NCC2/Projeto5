// src/components/Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import './Hero.css'; // Importa o CSS específico do Hero

function Hero() {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const passwordInput = form.querySelector('input[type="password"]:nth-child(5)');
    const confirmPasswordInput = form.querySelector('input[type="password"]:nth-child(6)');

    // Validação de senha
    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("As senhas não coincidem. Tente novamente.");
      return;
    }

    // Validação de e-mail
    const emailInput = form.querySelector('input[type="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // Se as validações passarem
    alert("Cadastro realizado com sucesso!");
    form.reset(); // Limpa o formulário
    navigate('/sobre-nos'); // Redireciona para a página sobre nós
  };

  return (
    <section className="hero">
      <div className="content">
        <h1>Empoderando você financeiramente!</h1>
        <p>Domine suas finanças com conteúdos educativos, planilhas personalizadas e interações que estimulam investimentos.</p>
      </div>
      <div className="form-container">
        <h2>Crie uma conta</h2>
        <form id="formCadastro" onSubmit={handleSubmit}> {/* Adiciona a função handleSubmit */}
          <input type="text" placeholder="Nome completo" required />
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Telefone" required />
          <input type="date" placeholder="Data de nascimento" required />
          <input type="password" placeholder="Criar senha" required />
          <input type="password" placeholder="Confirmar senha" required />
          <div className="login">
            <p>Já tem uma conta? Conecte-se</p>
            <div className="social-login">
              <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
              <a href="#"><img src="/linkedin.png" alt="LinkedIn" /></a>
              <a href="#"><img src="/gmail.png" alt="Gmail" /></a>
            </div>
          </div>
          <button type="submit">Começar</button>
        </form>
      </div>
    </section>
  );
}

export default Hero;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Importa useNavigate do react-router-dom
// import './Hero.css'; // Importa o CSS específico do Hero

// function Hero() {
//   const navigate = useNavigate(); // Inicializa o useNavigate
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // Validação de senha em tempo real
//   useEffect(() => {
//     if (password !== confirmPassword && confirmPassword !== '') {
//       setErrorMessage('As senhas não coincidem.');
//     } else {
//       setErrorMessage('');
//     }
//   }, [password, confirmPassword]);

//   // Função para validar o e-mail
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // Função que lida com o envio do formulário
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!validateEmail(email)) {
//       alert('Por favor, insira um e-mail válido.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert('As senhas não coincidem. Tente novamente.');
//       return;
//     }

//     alert('Cadastro realizado com sucesso!');
//     // Resetar o formulário
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');

//     // Redirecionar para outra página (por exemplo, /sucesso)
//     navigate('/sucesso'); // Aqui você define para onde deseja redirecionar
//   };

//   return (
//     <section className="hero">
//       <div className="content">
//         <h1>Empoderando você financeiramente!</h1>
//         <p>Domine suas finanças com conteúdos educativos, planilhas personalizadas e interações que estimulam investimentos.</p>
//       </div>
//       <div className="form-container">
//         <h2>Crie uma conta</h2>
//         <form id="formCadastro" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Nome completo"
//             required
//           />
//           <input
//             type="email"
//             placeholder="E-mail"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Telefone"
//             required
//           />
//           <input
//             type="date"
//             placeholder="Data de nascimento"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Criar senha"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirmar senha"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//           <div className="login">
//             <p>Já tem uma conta? Conecte-se</p>
//             <div className="social-login">
//               <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
//               <a href="#"><img src="/linkedin.png" alt="LinkedIn" /></a>
//               <a href="#"><img src="/gmail.png" alt="Gmail" /></a>
//             </div>
//           </div>
//           <button type="submit">Começar</button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Hero;


// import React, { useState, useEffect } from 'react';
// import './Hero.css'; // Importa o CSS específico do Hero

// function Hero() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // Validação de senha em tempo real
//   useEffect(() => {
//     if (password !== confirmPassword && confirmPassword !== '') {
//       setErrorMessage('As senhas não coincidem.');
//     } else {
//       setErrorMessage('');
//     }
//   }, [password, confirmPassword]);

//   // Função para validar o e-mail
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // Função que lida com o envio do formulário
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!validateEmail(email)) {
//       alert('Por favor, insira um e-mail válido.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert('As senhas não coincidem. Tente novamente.');
//       return;
//     }

//     alert('Cadastro realizado com sucesso!');
//     // Resetar o formulário
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   };

//   return (
//     <section className="hero">
//       <div className="content">
//         <h1>Empoderando você financeiramente!</h1>
//         <p>Domine suas finanças com conteúdos educativos, planilhas personalizadas e interações que estimulam investimentos.</p>
//       </div>
//       <div className="form-container">
//         <h2>Crie uma conta</h2>
//         <form id="formCadastro" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Nome completo"
//             required
//           />
//           <input
//             type="email"
//             placeholder="E-mail"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Telefone"
//             required
//           />
//           <input
//             type="date"
//             placeholder="Data de nascimento"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Criar senha"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirmar senha"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//           <div className="login">
//             <p>Já tem uma conta? Conecte-se</p>
//             <div className="social-login">
//               <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
//               <a href="#"><img src="/linkedin.png" alt="LinkedIn" /></a>
//               <a href="#"><img src="/gmail.png" alt="Gmail" /></a>
//             </div>
//           </div>
//           <button type="submit">Começar</button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Hero;

