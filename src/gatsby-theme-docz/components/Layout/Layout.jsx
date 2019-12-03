import React from 'react';
import classnames from 'classnames';
import './Layout.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

export const Layout = ({ children }) => {
  return (
    <div className={classnames('olt-Frame', 'olt-Layout')}>
      <Header />
      <Sidebar />
      <div className={classnames('olt-Layout-overlay')} />
      <main className={classnames('olt-Layout-body', 'docs-layout')}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
