import React from 'react';
import styled from 'styled-components';

export type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <FooterWrapper className={`footer ${className || ''}`}>
      <div>Nhr {new Date().getFullYear()}</div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  &.footer {
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.bgNav};

    & div {
      color: ${({ theme }) => theme.text};
      font-weight: bold;
    }
  }
`;

export default Footer;
