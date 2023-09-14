import React from 'react';
import { Route } from 'react-router-dom';

import Root from '../../pages/Root';
import Chats from '../../pages/Chats';

export const PublicRoutes: React.ReactFragment = [
  <Route path='/' element={<Root/>} key='public-root'>
    <Route path='/' element={<Chats/>} key='public-chats' />
  </Route>
];
