import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  // children nos permite embeber componentes en el momento
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
