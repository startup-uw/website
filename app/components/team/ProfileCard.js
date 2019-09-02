import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  padding: 0px 25px 50px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// TODO: add media queries to adjust card size and font

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;

const Name = styled.h3`
  color: #858585;
  padding: 10px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Position = styled.h3`
  color: black;
  font-style: italic;
  font-size: 1.1em;
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
