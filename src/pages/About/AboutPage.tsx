import React, { useEffect } from 'react';
import styled from 'styled-components';

import { aboutWording } from './about.wording';

const AboutPage = () => {
  useEffect(() => {
    document.title = aboutWording.title;
  }, []);

  return (
    <AboutWrapper className="about">
      <div className="about__content">
        <h1>{aboutWording.appName}</h1>
        <p>{aboutWording.content}</p>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  &.about {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .about__content {
      width: 80%;
      height: auto;
    }
  }
`;

export default AboutPage;
