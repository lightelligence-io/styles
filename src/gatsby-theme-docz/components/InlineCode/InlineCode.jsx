import React from 'react';
import classnames from 'classnames';
import * as styles from './InlineCode.module.css';

export const InlineCode = ({ children, className }) => {
  return <code className={classnames(styles.root, className)}>{children}</code>;
};

export default InlineCode;
