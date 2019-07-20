import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: inline-block;
  padding-left: 25px;
`;

const Underline = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

const Header = styled.h1`
  font-size: 3em;
`;

export default function Title(props) {
  return (
    <TitleWrapper>
      <Header> {props.text} </Header>
      <Underline />
    </TitleWrapper>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
