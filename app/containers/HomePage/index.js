/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import Particles from 'react-particles-js';
import { FormattedMessage } from 'react-intl';
// import svg from 'images/deer.svg';
import styled from 'styled-components';
import Anime from 'react-anime';
import messages from './messages';

const BodyWrapper = styled.div`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/cloud.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Headline = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25vh;
`;

const Motto = styled.h1`
  letter-spacing: 7px;
  margin-bottom: 25px;
  @media only screen and (min-width: 750px) {
    font-size: 3.25em;
  }
  @media only screen and (max-width: 749px) and (min-width: 600px) {
    font-size: 2.5em;
  }
  @media only screen and (max-width: 599px) {
    font-size: 1.5em;
  }
`;

const Call = styled.h1`
  font-size: 2em;
`;

export default function HomePage() {
  return (
    <Anime opacity={[0, 1]} easing="easeInOutBack" duration={2000}>
      <BodyWrapper>
        <Headline>
          <Motto>
            <FormattedMessage {...messages.motto} />
          </Motto>
          <Call>
            <FormattedMessage {...messages.call} />
          </Call>
        </Headline>
      </BodyWrapper>
    </Anime>
  );
}
