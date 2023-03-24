import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';

import { useAppStore } from '@project/store';

import Navigation from '../Nav/Navigation';
import SideDrawer from '../Nav/SideDrawer';
import Footer from './Footer';
import Modal from '../UI/Modal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDark, openModal, isModalOpen } = useAppStore();

  const lightMode = {
    bg: '#fafafa',
    bgNav: '#fafafa',
    paragraph: ' #18181b',
    text: '#18181b',
    overlay: 'rgba(0, 0, 0, 0.6)',
  };

  const darkMode = {
    bg: '#37383d',
    bgNav: '#1d202d',
    paragraph: '#fafafa',
    text: '#fafafa',
    overlay: 'rgba(255, 255, 255, 0.4)',
  };

  return (
    <ThemeProvider theme={isDark ? darkMode : lightMode}>
      <React.Fragment>
        <GlobalStyle />
        <Navigation />
        <SideDrawer />

        <main>{children}</main>

        {openModal && (
          <Modal fn={isModalOpen} heightModal>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, soluta nihil libero eum maxime dicta est? Reprehenderit
              sit magni ducimus error minima quos quo deserunt. Iste assumenda
              et rem temporibus?
            </p>
          </Modal>
        )}

        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Layout;
