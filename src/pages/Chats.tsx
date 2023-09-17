import React from 'react';
import ChatsList from '../widgets/ChatsList';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 384px;
  height: 100%;
  padding: 35px 28px;
  background: var(--blue-5);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`

const Title = styled.h1`
  color: #000;
  font-family: var(--font);
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`

const Right = styled.div``

const Chats: React.FC = () => {
  return (
    <Container>
      <Left>
        <Title>Chats</Title>
        <ChatsList/>
      </Left>
      <Right></Right>
    </Container>
  )
}

export default Chats;