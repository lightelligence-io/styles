import React from 'react';
import classnames from 'classnames';

export const Table = ({ children, className, ...props }) => {
  return (
    <div
      className={classnames(
        'olt-CardTable',
        'olt-CardTable--useFlexLayout',
        'olt-CardTable--alwaysTable',
        className,
      )}
      {...props}
    >
      <div className={classnames('olt-CardTable-frame')}>{children}</div>
    </div>
  );
};

export default Table;
