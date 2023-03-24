import React from 'react';
import styled from 'styled-components';

import { useAppStore } from '@project/store';

import { FaTimes } from 'react-icons/fa';
import NavLists from './NavLists';

interface SideDrawerProps {
  className?: React.ReactNode;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ className }) => {
  const { openSideDrawer, isSideDrawerOpen } = useAppStore();

  return (
    <SideDrawerWrapper className={`sidedrawer ${className || ''}`}>
      <nav className={`sidenav ${openSideDrawer ? 'open' : ''}`}>
        <FaTimes
          className="sidenav__icon"
          size={24}
          cursor="pointer"
          color="#dc2626"
          onClick={isSideDrawerOpen}
        />

        <NavLists />
      </nav>
      <div
        className={`overlay ${openSideDrawer ? 'open' : ''}`}
        onClick={isSideDrawerOpen}
      ></div>
    </SideDrawerWrapper>
  );
};

const SideDrawerWrapper = styled.div`
  &.sidedrawer {
    .sidenav {
      top: 0;
      right: 0;
      width: 350px;
      height: 100vh;
      position: fixed;
      background: ${({ theme }) => theme.bgNav};
      transform: translateX(100%);
      transition: transform ease-in-out 0.5s;
      z-index: 20;
    }

    .sidenav__icon {
      margin: 12px;
    }

    .overlay {
      top: 0;
      width: 100%;
      height: 100%;
      position: fixed;

      background: ${({ theme }) => theme.overlay};
      backdrop-filter: blur(3px);
      transition: all 0.5s;
      z-index: 10;
      transform: translateX(100%);
      transition: transform ease-in-out 0.5s;
    }

    .open {
      transform: translateX(0);
    }
  }
`;

export default SideDrawer;
