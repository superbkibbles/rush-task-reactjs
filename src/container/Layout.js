import React from 'react';

import requireAuth from '../HOC/requireAuth';
import Content from './Content';
import Nav from './Nav';

const Layout = ({navigate}) => {
    console.log(navigate);
  return <div>
      <Nav />
      <Content />
  </div>;
}

export default requireAuth(Layout, "/login");