import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../shared/Icon';

const Container = styled.div`
  width: 129px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 32px 54px;
  background-color: var(--blue-4);
  height: 100vh;
`

const Top = styled.div``

const NavItem = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`

const Bottom = styled.div``

const NavBar: React.FC = () => {
  return (
    <Container>
      <Top>
        <NavItem style={{ background: `var(--blue-1)` }}>
          <Link to='/'>
            <Icon name='chats' />
          </Link>
        </NavItem>
      </Top>
      <Bottom>
        <Link to='/profile'>
          <Icon name='profile' />
        </Link>
      </Bottom>
    </Container>
  )
}

export default NavBar;
