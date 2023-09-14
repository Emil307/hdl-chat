import React from 'react';
import { Outlet } from 'react-router-dom';

const Root: React.FC = () => {
  return (
    <div>
      <nav>nav</nav>
      <Outlet />
    </div>
  )
}

export default Root;
