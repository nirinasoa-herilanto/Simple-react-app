import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  className?: string;
  txt: string;
  fn?: () => void;
}

/**
 * Button Component
 * @param {string} className      otpional styling
 * @param {string} txt            text to represent action of button
 * @param {() => void} fn         to handle action of button
 * @returns button
 */
const Button: React.FC<ButtonProps> = ({ className, txt, fn }) => {
  return (
    <ButtonWrapper className={`button ${className || ''}`}>
      <button className="btn" onClick={fn}>
        {txt}
      </button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  &.button {
    .btn {
      width: 362px;
      height: 50px;

      padding: 6px;
      font-size: 18px;
      font-weight: bold;
      color: var(--white);

      border: none;
      outline: none;
      border-radius: 6px;
      background: var(--blue-600);
      box-shadow: 2px 4px 14px rgb(0, 0, 0, 0.2);

      cursor: pointer;
    }
  }
`;

export default Button;
