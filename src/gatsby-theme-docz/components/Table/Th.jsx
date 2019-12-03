import React from 'react';
import classnames from 'classnames';

export const Th = ({ children, className, ...props }) => {
  return (
    <div className={classnames('olt-CardTable-headItem', className)} {...props}>
      {children}
    </div>
  );
};

export default Th;
