/**
 *
 * EventCard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Moment from 'moment';
import messages from './messages';

const Card = styled.div`
  color: black;
  display: flex;
  padding: 0px 25px 50px 25px;
  flex-direction: row;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    padding: 25px 0px 0px 0px;
  }
`;

const Image = styled.img`
  min-width: 250px;
  height: 200px;
  padding-right: 10px;

  @media only screen and (max-width: 700px) {
    width: 100%;
    padding: 15px 60px 30px 60px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px; // TODO: FIX
`;

const Details = styled.p`
  font-size: 1.1em;
  color: #858585;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 525px) {
    font-size: 1em;
  }
`;

const Description = styled.p`
  font-size: 0.9em;
  font-weight: 500;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5em;
  margin-bottom: 5px;
  @media only screen and (max-width: 525px) {
    font-size: 1.15em;
  }
`;
const Filler = styled.span`
  flex: 1 1 auto;
`;

function formatDate(date) {
  return Moment(date).format('dddd, MMMM Do YYYY');
}

function EventCard(props) {
  return (
    <Card>
      <Image />
      <Body>
        <Title>
          <FormattedMessage
            {...messages.title}
            values={{ title: props.title }}
          />
        </Title>
        <div>
          <Details>
            {formatDate(props.date)}
            <Filler />
            <FormattedMessage
              {...messages.location}
              values={{ location: props.location }}
            />
          </Details>
          <Description>
            <div> {props.time}</div>
            <FormattedMessage
              {...messages.desc}
              values={{ description: props.description }}
            />
          </Description>
        </div>
      </Body>
    </Card>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default memo(EventCard);
