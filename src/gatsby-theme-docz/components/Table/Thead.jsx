import React from 'react';
import classnames from 'classnames';

export const Thead = ({ children, className, ...props }) => {
  return (
    <div className={classnames('olt-CardTable-head', className)} {...props}>
      {children}
    </div>
  );
};

export default Thead;
