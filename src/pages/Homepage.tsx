import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppStore } from '@project/store';
import { Button, Rating } from '@project/components';

const HomePage: React.FC = () => {
  const [rating, setRating] = React.useState(0);
  const [showRating, setShowRating] = React.useState(false);

  const { message, isModalOpen } = useAppStore();

  const displayRating = () => setShowRating((prevState) => !prevState);

  useEffect(() => {
    document.title = 'Homepage';
  }, []);

  return (
    <HomePageWrapper className="homepage">
      <h1>{message}</h1>

      {showRating && (
        <Rating rate={rating} fn={setRating} overrides={showRating} />
      )}

      <span className="note" onClick={displayRating}>
        Add a note {rating} notes
      </span>

      <div className="homepage__content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          soluta nihil libero eum maxime dicta est? Reprehenderit sit magni
          ducimus error minima quos quo deserunt. Iste assumenda et rem
          temporibus?
        </p>
      </div>

      <Button onClick={isModalOpen}>Open modal</Button>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
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

    .note {
      color: ${({ theme }: any) => theme.paragraph};
      font-weight: bold;
      margin-top: 14px;
      margin-bottom: 20px;
      cursor: pointer;
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

export default HomePage;
