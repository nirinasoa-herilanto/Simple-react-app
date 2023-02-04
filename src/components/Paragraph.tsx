import React from 'react';
import styled from 'styled-components';

interface ParagraphProps {
  className?: string;
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ className, children }) => {
  return (
    <ParagraphWrapper className={`paraph ${className || ''}`}>
      {children}
    </ParagraphWrapper>
  );
};

const ParagraphWrapper = styled.p`
  &.paraph {
    color: var(--zinc);
  }
`;

export default Paragraph;
