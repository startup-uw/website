/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Anime from 'react-anime';
import messages from './messages';

const BodyWrapper = styled.div`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Headline = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Motto = styled.h1`
  letter-spacing: 7px;
  margin-bottom: 25px;
  @media only screen and (min-width: 750px) {
    font-size: 3em;
  }
  @media only screen and (max-width: 749px) and (min-width: 600px) {
    font-size: 2em;
  }
  @media only screen and (max-width: 599px) {
    font-size: 1.5em;
  }
`;

const Background = styled.div`
  padding: 5%;
  background: url('/cloud-entire.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 25vh;
`;

const Call = styled.h1`
  @media only screen and (max-width: 599px) {
    font-size: 1.5em;
  }
  @media only screen and (min-width: 600px) {
    font-size: 1.8em;
  }
`;

export default function HomePage() {
  return (
    <Anime opacity={[0, 1]} easing="easeInOutBack" duration={2000}>
      <BodyWrapper>
        <Background>
          <Headline>
            <Motto>
              <FormattedMessage {...messages.motto} />
            </Motto>
            <Call>
              <FormattedMessage {...messages.call} />
            </Call>
          </Headline>
        </Background>
      </BodyWrapper>
    </Anime>
  );
}
