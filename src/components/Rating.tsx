import React from 'react';
import styled from 'styled-components';

interface RatingProps {
  className?: string;
  color?: string;
  overides?: boolean;
  value: number;
  onSubmitRating: (val: number) => void;
}

/**
 * Component rating, used for evaluation by stars
 * @param {string} color    color, optional, use the convention "#ffa900" for example;
 * @param {number} value    rating evaluation number 0 to 5 support decimal number;
 * @param {boolean} overides   use to set rating value when enabled
 */
const Rating: React.FC<RatingProps> = ({
  className,
  value,
  onSubmitRating,
  color = '#ffa900',
  overides = false,
}) => {
  const stars = [1, 2, 3, 4, 5];
  const [currentRating, setCurrentRating] = React.useState<number>(value);

  const d =
    'M43.86,2.93l9,24.48H81.63A1.42,1.42,0,0,1,82.4,30L59.32,44.77,68.23,68.9a1.42,1.42,0,0,1-2.09,1.69L42.53,55.5,18.91,70.59a1.42,1.42,0,0,1-2.09-1.69l8.92-24.13L2.66,30a1.42,1.42,0,0,1,.76-2.62H32.15L41.2,2.93A1.42,1.42,0,0,1,43.86,2.93Z';

  const full =
    'M43.86,2.93l9,24.48H81.63A1.42,1.42,0,0,1,82.4,30L59.32,44.77,68.23,68.9a1.42,1.42,0,0,1-2.09,1.69L42.53,55.5,18.91,70.59a1.42,1.42,0,0,1-2.09-1.69l8.92-24.13L2.66,30a1.42,1.42,0,0,1,.76-2.62H32.15L41.2,2.93A1.42,1.42,0,0,1,43.86,2.93Z';

  const half =
    'M42.81,55.5,19.19,70.59A1.42,1.42,0,0,1,17.1,68.9L26,44.77,2.94,30a1.42,1.42,0,0,1,.76-2.62H32.43l9-24.48a1.42,1.42,0,0,1,2.66,0';

  const refs = React.useRef(overides) as React.MutableRefObject<boolean>;

  const mouseOverHandler = (i: number) => {
    setCurrentRating(i);
    onSubmitRating(i);
  };
  const mouseLeaveHandler = () => {
    setCurrentRating(0);
    onSubmitRating(0);
  };

  /**
   * Use to update rating value
   * @param {number} val  rating value
   */
  const addRatingValueHandler = (val: number) => {
    setCurrentRating(val);
    onSubmitRating(val);

    // will disable rating event (mouseOver, mouseLeave, onClick)
    refs.current = false;
  };

  /**
   * Display rating paths, will check if it's full or half or may be empty
   */
  const generatePath = (ratingValue: number): JSX.Element => {
    let path: string = '';

    if (currentRating > ratingValue - 1) {
      path = currentRating >= ratingValue ? full : half;
    } else {
      path = '';
    }

    return (
      <path fill={color} strokeWidth={`4px`} strokeMiterlimit={10} d={path} />
    );
  };

  /**
   * SVG Rating Markup
   */
  const markup = (): JSX.Element[] => {
    return stars.map((ratingValue, i) => (
      <svg
        className="rating__svg"
        viewBox="0 0 85.05 72.82"
        stroke={color}
        key={i}
        onMouseOver={() => refs.current && mouseOverHandler(ratingValue)}
        onMouseLeave={() => refs.current && mouseLeaveHandler()}
        onClick={() => refs.current && addRatingValueHandler(ratingValue)}
      >
        <g>
          <path fill="none" strokeWidth={`4px`} strokeMiterlimit={10} d={d} />
          {generatePath(ratingValue)}
        </g>
      </svg>
    ));
  };
  return (
    <RatingWrapper className={`rating ${className || ''}`}>
      {markup()}
    </RatingWrapper>
  );
};

const RatingWrapper = styled.div`
  &.rating {
    width: 200px;
    display: flex;
    align-items: center;
    column-gap: 4px;

    .rating__svg {
      cursor: pointer;
    }
  }
`;

export default Rating;
