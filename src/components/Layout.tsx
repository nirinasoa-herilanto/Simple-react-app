import React from 'react';
import Navigation from './Navigation';
import SideDrawer from './SideDrawer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <SideDrawer />
      <main>{children}</main>
    </>
  );
};

export default Layout;
