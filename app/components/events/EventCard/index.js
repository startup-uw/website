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
    padding: 15px 0px 0px 0px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
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

const Description = styled.div`
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

const Time = styled.div`
  padding-bottom: 5px;
`;

const Image = styled.img`
  height: 200px;
  padding-right: 15px;
  @media only screen and (max-width: 700px) {
    max-width: 325px;
  }
  @media only screen and (min-width: 701px) {
    max-width: 325px;
  }
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

const RSVP = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: black;
  cursor: pointer;
  margin-left: 5px;
`;

function formatDate(date) {
  return Moment(date, 'MM-DD-YYYY').format('dddd, MMMM Do');
}

function EventCard(props) {
  return (
    <Card>
      <Banner>
        <a href={props.facebook}>
          <Image src={props.picture} />
        </a>
      </Banner>
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
            <Time> {props.time}</Time>
            <FormattedMessage
              {...messages.desc}
              values={{ description: props.description }}
            />
            {props.rsvp ? <RSVP href={props.rsvp}>RSVP HERE.</RSVP> : null}
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
  facebook: PropTypes.string,
  picture: PropTypes.string,
  rsvp: PropTypes.string,
};

export default memo(EventCard);
