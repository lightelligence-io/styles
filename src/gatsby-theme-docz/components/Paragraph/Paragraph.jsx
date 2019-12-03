import React from 'react';
import classnames from 'classnames';
import * as styles from './Paragraph.module.css';
import { Content } from '../Font/Font';

export const Paragraph = ({ children, className }) => {
  return (
    <Content className={classnames('olt-Paragraph', styles.root, className)}>
      {children}
    </Content>
  );
};

export default Paragraph;
