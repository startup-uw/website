import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  padding-bottom: 50px;
  @media only screen and (min-width: 701px) {
    padding-left: 25px;
  }
`;

const Underline = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

const Header = styled.h1`
  font-weight: 300;
  font-size: 4em;
  @media only screen and (max-width: 700px) and (min-width: 321px) {
    font-size: 2.5em;
  }
  @media only screen and (max-width: 320px) {
    font-size: 2em;
  }
`;

const Wrapper = styled.div`
  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
  }
`;

export default function Title(props) {
  return (
    <Wrapper>
      <Container>
        <Header> {props.text} </Header>
        <Underline />
      </Container>
    </Wrapper>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
