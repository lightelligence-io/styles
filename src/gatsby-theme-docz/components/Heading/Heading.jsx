import React from 'react';
import classnames from 'classnames';
import * as styles from './Heading.module.css';

export const Heading = ({ children, size, className }) => {
  const Element = `h${size}`;
  return (
    <Element
      className={classnames(
        `olt-uH${size}00`,
        styles.root,
        styles[`h${size}`],
        className,
      )}
    >
      {children}
    </Element>
  );
};

export default Heading;
