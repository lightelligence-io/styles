import React from 'react';
import classnames from 'classnames';

export const Pre = ({ children, className }) => {
  return <div className={classnames(className)}>{children}</div>;
};

export default Pre;
