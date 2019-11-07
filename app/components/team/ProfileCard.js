import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  transition: 500ms box-shadow;
  margin: 0px 15px 30px 15px;
  padding: 20px 20px 20px 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  }
`;

// TODO: add media queries to adjust card size and font

const ProfileImage = styled.img`
  width: 200px;
  height: 220px;
  border-radius: 5px;
`;

const Name = styled.h3`
  color: #858585;
  padding: 8px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Position = styled.h3`
  color: #bfbfbf;
  font-style: italic;
  font-size: 1em;
  font-weight: 300;
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
