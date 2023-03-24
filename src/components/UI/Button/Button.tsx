import React from 'react';
import styles from './Button.module.css';

export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
} & JSX.IntrinsicElements['button'];

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={`${styles.btn} ${className || ''}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
