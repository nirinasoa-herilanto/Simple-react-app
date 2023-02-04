import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { useAppStore } from '@project/store';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const { isSideDrawerOpen, isDark, switchMode } = useAppStore();

  return (
    <NavigationWrapper className={`navigation ${className || ''}`}>
      <nav className="nav">
        <div className="nav__logo">React App</div>
        <div className="nav__spacer" />

        <div className="nav__items">
          <ul className="nav__lists">
            <li>
              <Link className="nav__lists--to" to={'/#overviews'}>
                Overviews
              </Link>
            </li>
            <li>
              <Link className="nav__lists--to" to={'/#about'}>
                About
              </Link>
            </li>
          </ul>
        </div>

        {isDark ? (
          <FiSun className="icon" onClick={switchMode} />
        ) : (
          <FaMoon className="icon" onClick={switchMode} />
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
      color: ${({ theme }) => theme.logo};
      margin-left: 20px;
    }

    .nav__items {
      display: none;
    }

    .nav__lists {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
    }

    .nav__lists--to {
      color: ${({ theme }) => theme.logo};
      padding: 0 10px;
      text-decoration: none;
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
