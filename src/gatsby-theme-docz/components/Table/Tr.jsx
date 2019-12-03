import React from 'react';
import classnames from 'classnames';
import * as styles from './Tr.module.css';

export const Tr = ({ children, className, ...props }) => (
  <div
    className={classnames('olt-CardTable-card', styles.root, className)}
    {...props}
  >
    {children}
  </div>
);

export default Tr;
