import React from 'react';
import styled from 'styled-components';
import { useAppStore } from '@project/store';
import { Button, Portal, Modal, Paragraph } from '@project/components';

const Homepage: React.FC = () => {
  const { message, openModal, isModalOpen } = useAppStore();

  return (
    <HomepageWrapper className="homepage">
      <h1>{message}</h1>
      <div className="homepage__content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          soluta nihil libero eum maxime dicta est? Reprehenderit sit magni
          ducimus error minima quos quo deserunt. Iste assumenda et rem
          temporibus?
        </p>
      </div>
      <Button txt="Click me" fn={isModalOpen} />

      {openModal && (
        <Portal>
          <Modal fn={isModalOpen} heightModal>
            <Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, soluta nihil libero eum maxime dicta est? Reprehenderit
              sit magni ducimus error minima quos quo deserunt. Iste assumenda
              et rem temporibus?
            </Paragraph>
          </Modal>
        </Portal>
      )}
    </HomepageWrapper>
  );
};

const HomepageWrapper = styled.div`
  &.homepage {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .homepage__content {
      margin: 20px;
    }

    @media (min-width: 768px) {
      .homepage__content {
        width: 500px;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
`;

export default Homepage;
