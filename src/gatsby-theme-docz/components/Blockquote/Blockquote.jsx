import React from 'react';
import classnames from 'classnames';
import * as styles from './Blockquote.module.css';

export const Blockquote = ({ children, className }) => {
  return (
    <blockquote className={classnames(styles.root, className)}>
      {children}
    </blockquote>
  );
};

export default Blockquote;


