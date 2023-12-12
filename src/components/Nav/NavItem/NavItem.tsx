import React from 'react';
import styles from './NavItem.module.css';
import { Link } from 'react-router-dom';

export type NavItemProps = {
  className?: string;
  navLabel: string;
  linkTo: string;
  isDarkMode?: boolean;
} & JSX.IntrinsicElements['li'];

/**
 * Use to create a custom link navigation
 */
const NavItem: React.FC<NavItemProps> = ({
  className,
  navLabel,
  linkTo,
  isDarkMode = false,
  ...rest
}) => {
  return (
    <li className={`nav-li ${className || ''}`} {...rest}>
      <Link
        className={`${styles['nav-li__to']} ${
          isDarkMode && styles['nav-dark']
        }`}
        to={linkTo}
      >
        {navLabel}
      </Link>
    </li>
  );
};

export default NavItem;
