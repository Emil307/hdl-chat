import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../widgets/NavBar';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
`

const Root: React.FC = () => {
  return (
    <Container>
      <NavBar/>
      <Outlet />
    </Container>
  )
}

export default Root;
