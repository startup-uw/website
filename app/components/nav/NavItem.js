import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const Name = styled.a`
  font-size: 1.75em;
  padding: 10px;
  transition: all 0.3s;

  @media only screen and (max-width: 525px) {
    width: 100%;
    justify-content: flex-end;
    display: flex;
    padding-right: 45px; // calculated to align with hamburger menu
  }
  :hover {
    color: green;
  }
`;

export default function NavItem(props) {
  return <Name href={props.route}>{props.name}</Name>;
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
