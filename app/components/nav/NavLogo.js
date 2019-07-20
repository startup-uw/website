import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import logo from '../../images/circle-logo.svg';

const Title = styled.h1`
  font-size: 1.5em;
  letter-spacing: 2px;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  padding-right: 15px;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function NavLogo() {
  return (
    <LogoWrapper to="/">
      <Logo src={logo} />
      <Title>
        STARTUP <b>UW</b>
      </Title>
    </LogoWrapper>
  );
}
