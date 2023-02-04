import { useAppStore } from '@project/store';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navigation from './Navigation';
import SideDrawer from './SideDrawer';
import GlobalStyle from '../styles/GlobalStyle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDark } = useAppStore();

  const lightMode = {
    bg: '#fafafa',
    bgNav: '#fafafa',
    paragraph: ' #18181b',
    logo: '#18181b',
    overlay: 'rgba(0, 0, 0, 0.6)',
  };

  const darkMode = {
    bg: '#37383d',
    bgNav: '#1d202d',
    paragraph: '#fafafa',
    logo: '#fafafa',
    overlay: 'rgba(255, 255, 255, 0.4)',
  };

  return (
    <ThemeProvider theme={isDark ? darkMode : lightMode}>
      <GlobalStyle />
      <Navigation />
      <SideDrawer />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
