import React from 'react';
import classnames from 'classnames';

export const Link = ({ children, className, ...props }) => {
  return (
    <a className={classnames('olt-Link', className)} {...props}>
      {children}
    </a>
  );
};

export default Link;
