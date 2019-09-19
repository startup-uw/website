import React from 'react';
import styled from 'styled-components';
import { Filler } from '../../page/Filler';

const Wrapper = styled.div`
  padding: 45px 100px 60px 100px;
  background-color: #f8f8f8;
  @media only screen and (max-width: 320px) {
    padding: 45px 30px 60px 30px;
  }
`;

const Body = styled.div`
  color: #404040;
  display: flex;
  flex-direction: row;
`;

const Resources = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: 400;
`;

const Link = styled.a`
  text-decoration: none;
  padding: 2px 0px 2px 0px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Body>
        <p>© StartupUW 2019</p>
        <Filler />
        <Resources>
          <Title> Resources </Title>
          <Link href="https://www.facebook.com/StartupUW/"> Facebook </Link>
          <Link href="https://www.instagram.com/startupuw/"> Instagram </Link>
          <Link href="mailto:startup@uw.edu"> Email </Link>
        </Resources>
      </Body>
    </Wrapper>
  );
}
