import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { PublicRoutes } from './navigation/PublicRoutes';
import './styles/index.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
