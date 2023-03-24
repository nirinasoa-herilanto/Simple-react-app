import React from 'react';
import styles from './Overlay.module.css';

export type OverlayProps = {
  className?: string;
  isDarkMode?: boolean;
} & JSX.IntrinsicElements['div'];

const Overlay: React.FC<OverlayProps> = ({
  className,
  isDarkMode = false,
  ...rest
}) => {
  return (
    <div
      className={`${styles.overlay} ${isDarkMode && styles.dark} ${
        className || ''
      }`}
      {...rest}
    ></div>
  );
};

export default Overlay;
