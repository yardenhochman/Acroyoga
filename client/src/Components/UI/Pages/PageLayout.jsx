import React from 'react';

import Header from '../../Header';


const PageLayout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
export default PageLayout;