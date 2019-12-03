import React from 'react';
import classnames from 'classnames';

export const Td = ({ children, className, ...props }) => {
  return (
    <div className={classnames('olt-CardTable-cardItem', className)} {...props}>
      <div className={classnames('olt-CardTable-content', className)}>
        {children}
      </div>
    </div>
  );
};

export default Td;
