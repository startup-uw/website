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
  flex-direction: row;
  padding: 25px;
`;

const Image = styled.img`
  min-width: 200px;
  height: 200px;
  padding-right: 10px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Details = styled.p`
  font-size: 1.25em;
  color: #ccc;
  font-weight: 400;
`;

const Description = styled.p`
  font-size: 1em;
`;

const Title = styled.h1`
  font-weight: 700;
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
