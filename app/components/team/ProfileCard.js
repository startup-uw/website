import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// TODO: add media queries to adjust card size and font

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 5px;
`;

const Name = styled.h3`
  color: #858585;
  padding: 10px;
  font-weight: 400;
  text-transform: uppercase;
`;

const Position = styled.h3`
  color: black;
  font-style: italic;
`;

export default function ProfileCard(props) {
  return (
    <Card>
      <ProfileImage src={props.picture} />
      <Name> {props.name} </Name>
      <Position> {props.position} </Position>
    </Card>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
