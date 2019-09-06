import React, { useState } from 'react';

import styled from 'styled-components';

import NavItem from './NavItem';
import NavLogo from './NavLogo';

import NavDropdown from './NavDropdown';

const NavWrapper = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LinearSelection = styled.span`
  padding-right: 20px;
  @media only screen and (max-width: 610px) {
    display: none;
  }
`;

const DropdownSelection = styled.span`
  padding-right: 20px;
  display: none;
  @media only screen and (max-width: 610px) {
    display: flex;
  }
`;

const Filler = styled.span`
  flex: 1 1 auto;
`;

const HamburgerMenu = styled.div`
  width: 40px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const Line = styled.span`
  height: 1px;
  width: 40px;
  background-color: black;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default function NavigationBar() {
  const [expanded, toggleMenu] = useState();

  return (
    <React.Fragment>
      <NavWrapper>
        <NavLogo />
        <Filler />
        <LinearSelection>
          <NavItem name="team" route="/team" />
          <NavItem name="events" route="/events" />
          <NavItem name="contact" route="/contact" />
        </LinearSelection>
        <DropdownSelection>
          <HamburgerMenu onClick={() => toggleMenu(!expanded)}>
            <Line />
            <Line />
            <Line />
          </HamburgerMenu>
        </DropdownSelection>
      </NavWrapper>
      {expanded ? <NavDropdown /> : null}
    </React.Fragment>
  );
}
