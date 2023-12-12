import React from 'react';
import styled from 'styled-components';

import { FiSun } from 'react-icons/fi';

import { FaBars, FaMoon } from 'react-icons/fa';
import { useAppStore } from '@project/store';

import NavLists from './NavLists';

interface NavigationProps {
  className?: string;
}

/**
 * Use to display Navigation on UI
 */
const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const { isSideDrawerOpen, theme, switchModeHandler } = useAppStore();

  return (
    <NavigationWrapper className={`navigation ${className || ''}`}>
      <nav className="nav">
        <div className="nav__logo">Simple App</div>
        <div className="nav__spacer" />

        <div className="nav__items">
          <NavLists />
        </div>

        {theme !== 'light' ? (
          <FiSun
            className="icon"
            onClick={switchModeHandler.bind(null, 'light')}
          />
        ) : (
          <FaMoon
            className="icon"
            onClick={switchModeHandler.bind(null, 'dark')}
          />
        )}

        <FaBars className="nav__icon" onClick={isSideDrawerOpen} />
      </nav>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.header`
  &.navigation {
    width: 100%;
    height: 56px;
    background: ${({ theme }) => theme.bgNav};
    box-shadow: 2px 4px 14px rgb(0, 0, 0, 0.2);

    .nav__icon {
      font-size: 18px;
      color: var(--blue-500);
      cursor: pointer;
      margin-right: 30px;
      display: block;
    }

    .icon {
      font-size: 18px;
      color: #ffa900;
      cursor: pointer;
      margin-left: 30px;
      margin-right: 30px;
    }

    .nav__spacer {
      flex: 1;
    }

    .nav {
      height: 56px;
      display: flex;
      align-items: center;
    }

    .nav__logo {
      font-size: 24px;
      font-weight: bold;
      color: ${({ theme }) => theme.text};
      margin-left: 20px;
    }

    .nav__items {
      display: none;
    }

    @media (min-width: 768px) {
      .nav__icon {
        display: none;
      }

      .nav__items {
        display: block;
      }
    }
  }
`;

export default Navigation;
