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
  @media only screen and (max-width: 321px) {
    font-size: 0.9em;
  }
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

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubscriptionLink = styled.a`
  text-decoration: none;
  padding: 2px 0px 2px 0px;
  font-weight: 300;
  :hover {
    font-weight: 700;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Body>
        <Left>
          <Title>© StartupUW 2019</Title>
          <SubscriptionLink href="http://eepurl.com/gxwclr" target="_blank">
            Subscribe to the mailing list.
          </SubscriptionLink>
        </Left>
        <Filler />
        <Resources>
          <Title> Resources </Title>
          <Link href="https://www.facebook.com/StartupUW/" target="_blank">
            Facebook
          </Link>
          <Link href="https://www.instagram.com/startupuw/" target="_blank">
            Instagram
          </Link>
          <Link href="mailto:startup@uw.edu">Email</Link>
        </Resources>
      </Body>
    </Wrapper>
  );
}
