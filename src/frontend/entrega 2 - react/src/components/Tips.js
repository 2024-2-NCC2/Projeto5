// import React from 'react';
// import styled from 'styled-components';
// import Banner from '../components/Banner';

// const TipsContainer = styled.div`
//   text-align: center;
//   min-height: 100vh;
//   color: #004f42;
//   background-color: #f5f5f5;
// `;

// const Title = styled.h1`
//   font-size: 2.5rem;
//   font-family: 'Inter', sans-serif;
//   margin-bottom: 10px;
//   margin-top: 50px;
// `;

// const Subtitle = styled.p`
//   font-size: 1.8rem;
//   font-weight: 200;
//   color: #666;
//   margin-bottom: 30px;
//   text-align: center;
//   padding: 40px 50px;
//   gap: 60px;
// `;

// const TipsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr); 
//   gap: 30px;                             
//   padding: 80px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;          
//   }
// `;

// const TipItem = styled.article`
//   background: rgba(255, 255, 255, 0.9);
//   border-radius: 10px;
//   padding: 20px;                         
//   height: 400px;                         
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-10px);  
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
//   }
// `;

// const TipIcon = styled.span`
//   font-size: 3rem;
//   display: block;
//   margin-bottom: 10px;
// `;

// const TipTitle = styled.h2`
//   font-size: 1.8rem;
//   color: #004f42;
//   margin: 10px 0;
// `;

// const TipDescription = styled.p`
//   font-size: 1.2rem;
//   color: #333;
//   font-weight: 300;
// `;

// const FinancialTips = () => {
//   const tips = [
//     {
//       icon: "📊",
//       title: "Faça um Orçamento Mensal",
//       description: "Mantenha suas finanças em dia organizando suas receitas e despesas mensais. Isso oferece uma visão clara de sua situação financeira, permitindo identificar onde você pode economizar e onde está gastando mais. Considere utilizar planilhas ou aplicativos de finanças pessoais para facilitar o acompanhamento e tornar o controle mais eficiente. Ao ter um registro detalhado, você poderá tomar decisões financeiras mais informadas e alcançar seus objetivos com mais facilidade.",
//     },
//     {
//       icon: "💳",
//       title: "Pague suas Contas em Dia",
//       description: "Para não perder dinheiro com juros e multas por atraso, crie um sistema de lembretes que avise sobre as datas de vencimento das suas contas. Utilize aplicativos de calendário ou alarmes no celular para garantir que você pague suas contas em dia, preservando assim sua saúde financeira e evitando despesas desnecessárias.",
//     },
//     {
//       icon: "🛟",
//       title: "Reserve um Fundo de Emergência",
//       description: "Tenha entre 3 a 6 meses de despesas guardados para imprevistos. Esse fundo traz segurança e tranquilidade em situações inesperadas, como desemprego ou emergências médicas. Ao ter essa reserva, você se sente mais seguro para enfrentar desafios sem comprometer seu orçamento mensal.",
//     },
//     {
//       icon: "📚",
//       title: "Invista em Conhecimento Financeiro",
//       description: " Dedique tempo para aprender sobre finanças pessoais, investimentos e como gerenciar melhor seu dinheiro. Livros, cursos online e vídeos educativos podem ser ótimas fontes de informação. O conhecimento financeiro é fundamental para tomar decisões mais inteligentes e alcançar seus objetivos econômicos.",
//     },
//     {
//       icon: "🛍️",
//       title: "Evite Compras por Impulso",
//       description: "Antes de realizar uma compra, reserve um tempo para refletir se você realmente precisa do item e se ele está dentro do seu orçamento. Essa pausa ajuda a evitar compras por impulso, garantindo que suas decisões de consumo sejam conscientes e alinhadas com seus objetivos financeiros.",
//     },
//     {
//       icon: "🏦",
//       title: "Conheça o Banco do Povo",
//       description: "O Banco do Povo oferece microcrédito com taxas acessíveis para pequenos empreendedores. Essa é uma excelente opção para quem deseja iniciar ou expandir um negócio com baixo custo, facilitando o acesso a recursos financeiros e contribuindo para o crescimento do seu empreendimento.",
//     },
//     {
//       icon: "🔍",
//       title: "Revise Seus Gastos Regularmente",
//       description: "Realize uma análise periódica de suas despesas para identificar onde você pode economizar. Faça uma lista dos gastos mensais e identifique aqueles que são supérfluos ou que podem ser reduzidos. Essa prática ajuda a otimizar seu orçamento e direcionar mais recursos para suas metas financeiras.",
//     },
//     {
//       icon: "💸",
//       title: "Tenha um Plano de Pagamento para Dívidas",
//       description: "Se você possui dívidas, é fundamental organizar um plano para pagá-las o quanto antes. Priorize as dívidas com juros mais altos, pois isso pode resultar em uma economia significativa a longo prazo. Criar um cronograma de pagamento e acompanhar seu progresso pode ajudar a aliviar a pressão financeira.",
//     },
//     {
//       icon: "🔖",
//       title: "Aproveite Descontos e Cashback",
//       description: "Busque promoções e utilize programas de cashback para economizar em suas compras. No entanto, lembre-se de evitar compras por impulso apenas para aproveitar uma oferta. Sempre verifique se o item realmente se encaixa nas suas necessidades e no seu orçamento.",
//     },
//     {
//       icon: "📈",
//       title: "Estabeleça Metas Financeiras",
//       description: "Estabeleça objetivos claros para o uso do seu dinheiro, como economizar para uma viagem, investir para o futuro ou adquirir algo importante. Ter metas bem definidas ajuda a manter o foco e a disciplina, permitindo que você direcione seus recursos de forma eficiente para alcançar seus sonhos.",
//     },
//   ];

//   return (
//     <TipsContainer>
//       <Banner
//         texto="Dicas de Ouro para seu Bolso"
//         descricao="Transforme sua relação com o dinheiro! Encontre aqui dicas valiosas e estratégias para planejar, poupar e investir de forma inteligente"
//       />
//       <Title>8 dicas de educação financeira para você transformar sua vida</Title>
//       <Subtitle>A educação financeira é essencial para termos mais controle sobre nossa vida e alcançarmos segurança. Saber lidar com dinheiro vai além de economizar: trata-se de entender como ganhar, poupar e investir de forma consciente. No Brasil, o assunto ainda é pouco discutido e muitas vezes só abordado em momentos de crise, o que gera um conceito distorcido. Ter educação financeira é fundamental para tomar melhores decisões, evitar dívidas e garantir uma vida tranquila, independentemente da renda. Aqui, você encontra dicas para transformar sua relação com o dinheiro e construir um futuro mais estável.</Subtitle>
//       <TipsGrid>
//         {tips.map((tip, index) => (
//           <TipItem key={index}>
//             <TipIcon>{tip.icon}</TipIcon>
//             <TipTitle>{tip.title}</TipTitle>
//             <TipDescription>{tip.description}</TipDescription>
//           </TipItem>
//         ))}
//       </TipsGrid>
//     </TipsContainer>
//   );
// };

// export default FinancialTips;

import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import { FaChartLine, FaCoins, FaSuitcase, FaBalanceScale, FaFileAlt, FaGlobe, FaCalendarCheck, FaBook, FaTags, FaSearch } from 'react-icons/fa';

const TipsContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0;
  text-align: center;
`;

const Section = styled.section`
  padding: 60px 300px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #015044;
  margin-bottom: 0px;
  margin-top: 60px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.30rem;
  font-weight: 300;
  color: #333;
  margin-bottom: -20px;
  text-align: center;
  padding: 0 300px;
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 50px;                             
  padding: 60px 300px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;          
    padding: 60px 20px;
  }
`;

const TipItem = styled.article`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  padding-left: 65px;
  padding-right: 65px;
  text-align: center;
  background-color: #dee8e7;
  border: 1px solid #d1d1d1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);  
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
`;

const TipIcon = styled.span`
  font-size: 3rem;
  display: block;
  margin-bottom: 10px;
`;

const TipTitle = styled.h2`
  font-size: 1.8rem;
  color: #004f42;
  margin: 10px 0;
`;

const TipDescription = styled.p`
  font-size: 1.2rem;
  color: #333;
  font-weight: 300;
`;

const FinancialTips = () => {
  const tips = [
    {
      icon: <FaChartLine size={40} color="#014f42" />,
      title: "Faça um Orçamento Mensal",
      description: "Mantenha suas finanças em dia organizando suas receitas e despesas mensais. Isso oferece uma visão clara de sua situação financeira, permitindo identificar onde você pode economizar e onde está gastando mais. Considere utilizar planilhas ou aplicativos de finanças pessoais para facilitar o acompanhamento e tornar o controle mais eficiente. Ao ter um registro detalhado, você poderá tomar decisões financeiras mais informadas e alcançar seus objetivos com mais facilidade.",
    },
    {
      icon: <FaCalendarCheck size={40} color="#014f42" />,
      title: "Pague suas Contas em Dia",
      description: "Para não perder dinheiro com juros e multas por atraso, crie um sistema de lembretes que avise sobre as datas de vencimento das suas contas. Utilize aplicativos de calendário ou alarmes no celular para garantir que você pague suas contas em dia, preservando assim sua saúde financeira e evitando despesas desnecessárias.",
    },
    {
      icon: <FaSuitcase size={40} color="#014f42" />,
      title: "Reserve um Fundo de Emergência",
      description: "Tenha entre 3 a 6 meses de despesas guardados para imprevistos. Esse fundo traz segurança e tranquilidade em situações inesperadas, como desemprego ou emergências médicas. Ao ter essa reserva, você se sente mais seguro para enfrentar desafios sem comprometer seu orçamento mensal.",
    },
    {
      icon: <FaBook size={40} color="#014f42" />,
      title: "Invista em Conhecimento Financeiro",
      description: "Dedique tempo para aprender sobre finanças pessoais, investimentos e como gerenciar melhor seu dinheiro. Livros, cursos online e vídeos educativos podem ser ótimas fontes de informação. O conhecimento financeiro é fundamental para tomar decisões mais inteligentes e alcançar seus objetivos econômicos.",
    },
    {
      icon: <FaTags size={40} color="#014f42" />,
      title: "Evite Compras por Impulso",
      description: "Antes de realizar uma compra, reserve um tempo para refletir se você realmente precisa do item e se ele está dentro do seu orçamento. Essa pausa ajuda a evitar compras por impulso, garantindo que suas decisões de consumo sejam conscientes e alinhadas com seus objetivos financeiros.",
    },
    {
      icon: <FaCoins size={40} color="#014f42" />,
      title: "Conheça o Banco do Povo",
      description: "O Banco do Povo oferece microcrédito com taxas acessíveis para pequenos empreendedores. Essa é uma excelente opção para quem deseja iniciar ou expandir um negócio com baixo custo, facilitando o acesso a recursos financeiros e contribuindo para o crescimento do seu empreendimento.",
    },
    {
      icon: <FaSearch size={40} color="#014f42" />,
      title: "Revise Seus Gastos Regularmente",
      description: "Realize uma análise periódica de suas despesas para identificar onde você pode economizar. Faça uma lista dos gastos mensais e identifique aqueles que são supérfluos ou que podem ser reduzidos. Essa prática ajuda a otimizar seu orçamento e direcionar mais recursos para suas metas financeiras.",
    },
    {
      icon: <FaBalanceScale size={40} color="#014f42" />,
      title: "Tenha um Plano de Pagamento para Dívidas",
      description: "Se você possui dívidas, é fundamental organizar um plano para pagá-las o quanto antes. Priorize as dívidas com juros mais altos, pois isso pode resultar em uma economia significativa a longo prazo. Criar um cronograma de pagamento e acompanhar seu progresso pode ajudar a aliviar a pressão financeira.",
    },
    {
      icon: <FaFileAlt size={40} color="#014f42" />,
      title: "Aproveite Descontos e Cashback",
      description: "Busque promoções e utilize programas de cashback para economizar em suas compras. No entanto, lembre-se de evitar compras por impulso apenas para aproveitar uma oferta. Sempre verifique se o item realmente se encaixa nas suas necessidades e no seu orçamento.",
    },
    {
      icon: <FaGlobe size={40} color="#014f42" />,
      title: "Estabeleça Metas Financeiras",
      description: "Estabeleça objetivos claros para o uso do seu dinheiro, como economizar para uma viagem, investir para o futuro ou adquirir algo importante. Ter metas bem definidas ajuda a manter o foco e a disciplina, permitindo que você direcione seus recursos de forma eficiente para alcançar seus sonhos.",
    },
  ];

  return (
    <TipsContainer>
      <Banner
        texto="Dicas de Ouro para seu Bolso"
        descricao="Transforme sua relação com o dinheiro! Encontre aqui dicas valiosas e estratégias para planejar, poupar e investir de forma inteligente"
      />
      <Title>8 dicas de educação financeira para você transformar sua vida</Title>
      <Subtitle>A educação financeira é essencial para termos mais controle sobre nossa vida e alcançarmos segurança. Saber lidar com dinheiro vai além de economizar: trata-se de entender como ganhar, poupar e investir de forma consciente. No Brasil, o assunto ainda é pouco discutido e muitas vezes só abordado em momentos de crise, o que gera um conceito distorcido. Ter educação financeira é fundamental para tomar melhores decisões, evitar dívidas e garantir uma vida tranquila, independentemente da renda. Aqui, você encontra dicas para transformar sua relação com o dinheiro e construir um futuro mais estável.</Subtitle>
      <TipsGrid>
        {tips.map((tip, index) => (
          <TipItem key={index}>
            <TipIcon>{tip.icon}</TipIcon>
            <TipTitle>{tip.title}</TipTitle>
            <TipDescription>{tip.description}</TipDescription>
          </TipItem>
        ))}
      </TipsGrid>
    </TipsContainer>
  );
};

export default FinancialTips;
