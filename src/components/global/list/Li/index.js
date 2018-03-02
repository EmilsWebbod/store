import React from 'react';

const Li = ({children, ...props}) => (
  <li {...props}>{children}</li>
);

export default Li;
