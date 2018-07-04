import React from 'react';

export default ({clicked, disabled, children}) => (
  <button disabled={disabled} onClick={clicked}>
    {children}
  </button>
);
