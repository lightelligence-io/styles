import React from 'react';

require('../../../src/index.scss');

export default ({ children }) => (
  <div>
    <h1>My custom wrapper</h1>
    {children}
  </div>
);
