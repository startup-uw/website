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
  width: 100px;
  height: 100px;
  padding-right: 10px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

function EventCard() {
  return (
    <Card>
      <Image />
      <Body>
        <h1>
          <FormattedMessage {...messages.title} />
        </h1>
        <p>
          <FormattedMessage {...messages.body} />
        </p>
      </Body>
    </Card>
  );
}

EventCard.propTypes = {};

export default memo(EventCard);
