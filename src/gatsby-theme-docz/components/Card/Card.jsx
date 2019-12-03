import React from 'react';
import classnames from 'classnames';

export const Card = ({ children, className }) => {
  return <div className={classnames('olt-Card', className)}>{children}</div>;
};

export default Card;
