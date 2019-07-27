import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  @media only screen and (min-width: 526px) {
    padding-left: 25px;
  }
`;

const Underline = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

const Header = styled.h1`
  font-size: 3em;
  @media only screen and (max-width: 700px) {
    font-size: 2.5em;
  }
  @media only screen and (max-width: 425px) {
    font-size: 1.5em;
  }
`;

const Wrapper = styled.div`
  @media only screen and (max-width: 525px) {
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
