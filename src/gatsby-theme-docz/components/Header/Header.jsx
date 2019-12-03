import React from 'react';
import classnames from 'classnames';

export const Header = ({ children, onClickMobileMenu }) => (
  <header
    className={classnames('olt-Header', 'olt-ActionButton--proximity-area')}
  >
    <div>Lightelligence Styles</div>
    <div className={classnames('olt-Header-body')}>{children}</div>
    <div className={classnames('olt-Header-mobile-menu')}>
      {/*<ActionButton*/}
      {/*  iconLeft="menu"*/}
      {/*  buttonType="default"*/}
      {/*  standalone*/}
      {/*  base*/}
      {/*  onClick={onClickMobileMenu}*/}
      {/*/>*/}
    </div>
  </header>
);

export default Header;
