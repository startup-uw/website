/**
 *
 * EventCard
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Card = styled.div`
  color: black;
  display: flex;
  padding: 25px;
  flex-direction: row;
  @media only screen and (max-width: 525px) {
    flex-direction: column;
    padding: 25px 0px 0px 0px;
  }
`;

const Image = styled.img`
  width: 200px;
  min-width: 200px;
  height: 200px;
  padding-right: 10px;

  @media only screen and (max-width: 525px) {
    width: 100%;
    padding-right: 0px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Details = styled.p`
  font-size: 1.25em;
  color: #ccc;
  font-weight: 400;
  @media only screen and (max-width: 525px) {
    font-size: 1em;
  }
`;

const Description = styled.p`
  font-size: 1.25em;
  @media only screen and (max-width: 525px) {
    font-size: 1em;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  @media only screen and (max-width: 525px) {
    font-size: 1.25em;
  }
`;

function EventCard() {
  return (
    <Card>
      <Image />
      <Body>
        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
        <div>
          <Details>
            <FormattedMessage {...messages.details} />
          </Details>
          <Description>
            <FormattedMessage {...messages.desc} />
          </Description>
        </div>
      </Body>
    </Card>
  );
}

EventCard.propTypes = {};

export default memo(EventCard);
