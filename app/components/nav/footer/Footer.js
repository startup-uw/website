import React from 'react';
import styled from 'styled-components';
import { mdiFacebookBox } from '@mdi/js';
import Icon from '@mdi/react';

const Wrapper = styled.div`
  padding: 100px;
  background-color: white;
`;

const Body = styled.div`
  color: black;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Icon
        path={mdiFacebookBox}
        title="Facebook"
        size={1}
        horizontal
        vertical
        color="black"
        rotate={180}
      />
      <Body />
    </Wrapper>
  );
}
