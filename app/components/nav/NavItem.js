import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const Name = styled.a`
  font-size: 1.75em;
  padding: 10px;
  transition: background-color 0.3s;

  @media only screen and (max-width: 525px) {
    width: 100%;
    justify-content: flex-end;
    display: flex;
    padding-right: 45px; // calculated to align with hamburger menu
  }
  :hover {
    color: black; //#43c7f2;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-weight: 300;
  }
`;

export default function NavItem(props) {
  return <Name href={props.route}>{props.name}</Name>;
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
