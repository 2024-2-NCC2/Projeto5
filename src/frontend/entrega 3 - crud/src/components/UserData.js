import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const UserContainer = styled.div`
  padding: 20px;
  text-align: center;
  color: #004f42;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const UserInfo = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const UserData = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/usuario', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Erro ao buscar informações do usuário:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <UserContainer>Carregando informações do usuário...</UserContainer>;
  }

  if (!user) {
    return <UserContainer>Nenhum usuário encontrado.</UserContainer>;
  }

  return (
    <UserContainer>
      <Title>Informações do Usuário</Title>
      <UserInfo>
        <p><strong>Nome:</strong> {user.nome}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Telefone:</strong> {user.telefone}</p>
        <p><strong>Data de Nascimento:</strong> {new Date(user.data_nasc).toLocaleDateString()}</p>
      </UserInfo>
    </UserContainer>
  );
};

export default UserData;
