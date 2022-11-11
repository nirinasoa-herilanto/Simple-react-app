import React, { useEffect } from 'react';
import styled from 'styled-components';

const Error: React.FC = () => {
  const errorMessage = '404 | Ressource not found.';

  useEffect(() => {
    document.title = errorMessage;
  }, []);

  return (
    <ErrorWrapper className="error">
      <span className="error__message">{errorMessage}</span>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.div`
  &.error {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .error__message {
      font-size: 32px;
      color: var(--red-600);
    }
  }
`;

export default Error;
