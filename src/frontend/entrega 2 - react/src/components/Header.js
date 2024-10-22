import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(90deg, #013527 14%, #11a88a 85%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  height: 80px;
`;

const Logo = styled.div`
  img {
    width: 80px;
  }
`;

const Nav = styled.nav`
  flex: 1;
`;

const NavLinks = styled.ul`
  margin-left: -800px;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 26px;
  padding: 5px 10px;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: #004f42; 
  }
`;

const MinhaContaButton = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 20px 20px;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-size: 17px;

  &:hover {
    background-color: #fff;
    color: #004f42;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src="/logo.jpeg" alt="Sua Logo" />
      </Logo>
      <Nav>
        <NavLinks>
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/noticias">Notícias</NavLink></li>
          <li><NavLink href="/ferramentas">Ferramentas</NavLink></li>
          <li><NavLink href="/sobre-nos">Sobre Nós</NavLink></li>
        </NavLinks>
      </Nav>
      <MinhaContaButton><NavLink href="/">Minha conta</NavLink></MinhaContaButton>
    </HeaderContainer>
  );
}

export default Header;