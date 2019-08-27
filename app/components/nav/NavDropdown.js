import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 525px) {
    display: none;
  }
`;

export default function NavDropdown() {
  return (
    <Dropdown>
      <NavItem name="team" route="/team" />
      <NavItem name="events" route="/events" />
      <NavItem name="contact" route="/contact" />
    </Dropdown>
  );
}
