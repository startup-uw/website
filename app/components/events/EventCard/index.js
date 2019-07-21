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
  width: 200px;
  height: 200px;
  padding-right: 10px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  font-size: 1.25em;
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
        <Description>
          <FormattedMessage {...messages.body} />
        </Description>
      </Body>
    </Card>
  );
}

EventCard.propTypes = {};

export default memo(EventCard);
