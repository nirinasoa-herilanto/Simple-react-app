import React from 'react';
import styled from 'styled-components';

import { useAppStore } from '@project/store';

import NavItem from './NavItem/NavItem';

export type NavListsProps = {
  className?: string;
};

/**
 * NavLists Component
 * - use to display navigation item
 */
const NavLists: React.FC<NavListsProps> = ({ className }) => {
  const { theme } = useAppStore();

  return (
    <NavListsWrapper className={`nav-lists ${className || ''}`}>
      <NavItem
        navLabel="Overview"
        linkTo="/#overviews"
        isDarkMode={theme !== 'light'}
      />
      <NavItem
        navLabel="About"
        linkTo="/about"
        isDarkMode={theme !== 'light'}
      />
      <NavItem
        navLabel="Meetup"
        linkTo="/meetup"
        isDarkMode={theme !== 'light'}
      />
    </NavListsWrapper>
  );
};

const NavListsWrapper = styled.ul`
  &.nav-lists {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
    }
  }
`;

export default NavLists;
