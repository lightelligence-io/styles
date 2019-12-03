import React from 'react';
import classnames from 'classnames';

export const Tbody = ({ children, className, ...props }) => {
  return (
    <div className={classnames('olt-CardTable-body', className)} {...props}>
      {children}
    </div>
  );
};

export default Tbody;
