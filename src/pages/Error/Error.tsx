import React, { useEffect } from 'react';
import styled from 'styled-components';

import { errorWording } from './error.wording';

const Error: React.FC = () => {
  useEffect(() => {
    document.title = errorWording.errorMessage;
  }, []);

  return (
    <ErrorWrapper className="error">
      <span className="error__message">{errorWording.errorMessage}</span>
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
