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
import { Filler } from 'components/page/Filler';
import messages from './messages';

const BodyWrapper = styled.div`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /*
  background: url('/background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  */
`;

const Headline = styled.div`
  font-family: 'Lato', sans-serif;
  color: black;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  @media only screen and (max-width: 750px) {
    font-size: 1em;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
`;

const Abstract = styled.img`
  width: 40%;
  max-width: 600px;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

const Arrow = styled.a`
  width: 120px;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  :hover {
    width: 150px;
    cursor: pointer;
  }
  background: url('/arrow.svg');
  background-size: contain;
  background-repeat: no-repeat;
`;

const First = styled.h1`
  letter-spacing: 10px;
  font-weight: 500;
  font-style: initial;
  @media only screen and (max-width: 400px) {
    letter-spacing: 5px;
  }
`;

const Second = styled.h1`
  letter-spacing: 15px;
  font-weight: 600;
  font-style: italic;
  @media only screen and (max-width: 400px) {
    letter-spacing: 8px;
  }
`;

const Third = styled.h1`
  letter-spacing: 20px;
  font-weight: 900;
  font-style: initial;
  @media only screen and (max-width: 400px) {
    letter-spacing: 10px;
  }
`;

export default function HomePage() {
  return (
    <Anime opacity={[0, 1]} easing="easeInOutBack" duration={2000}>
      <BodyWrapper>
        <Content>
          <Headline>
            <First>
              <FormattedMessage {...messages.first} />
            </First>
            <Second>
              <FormattedMessage {...messages.second} />
            </Second>
            <Third>
              <FormattedMessage {...messages.third} />
            </Third>
            <Arrow href="/contact" />
          </Headline>
          <Filler />
          <Abstract src="/abstract.svg" />
        </Content>
      </BodyWrapper>
    </Anime>
  );
}
