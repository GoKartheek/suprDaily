import React from 'react';
import './style.css';
import Header from '../Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout;
