import React from 'react';
import './Header.css'; 
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.jpeg" alt="Sua Logo" /> 
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/noticias">Notícias</a></li>
          <li><a href="/ferramentas">Ferramentas</a></li>
          <li><a href="/sobre-nos">Sobre Nós</a></li>
        </ul>
      </nav>
      <button className="minha-conta">Minha conta</button>
    </header>
  );
}

export default Header;
