import React from 'react';

import Header from '../Header/Header';


const PageLayout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
export default PageLayout;