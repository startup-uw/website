/**
 *
 * Contact
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-right: 50px;
  @media only screen and (max-width: 900px) {
    width: 70%;
    margin-right: 0px;
  }
  @media only screen and (max-width: 650px) {
    width: 90%;
    margin-right: 0px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

const Title = styled.span`
  color: #ccc;
  margin-right: 10px;
  font-size: 1.2em;
  font-weight: 300;
`;

const Input = styled.input`
  display: flex;
  flex: 1 0 auto;
  border-radius: 3px;
  border-style: solid;
  border-color: #ccc;
  border-width: 1px;
  font-size: 1.2em;
  font-weight: 300;
  color: black;
  padding: 2px 2px 2px 4px;
`;

const TextArea = styled.textarea`
  display: flex;
  flex: 1 0 auto;
  border-radius: 3px;
  border-style: solid;
  border-color: #ccc;
  border-width: 1px;
  font-size: 1.2em;
  max-height: 150px;
  font-weight: 300;
  color: black;
  padding: 2px 2px 2px 4px;
`;

const Submission = styled.button`
  border-radius: 3px;
`;

const Header = styled.h1`
  font-size: 2em;
  font-weight: 300;
`;

const Filler = styled.span`
  display: flex;
  flex: 1 1 auto;
`;

function Contact() {
  return (
    <Body>
      <Header>
        <FormattedMessage {...messages.title} />
      </Header>
      <Filler />
      <Form
        action="https://submit-form.com/rphbWMa0d2nFDfTe96WmN"
        target="_self"
      >
        {/* <input type="hidden" name="_redirect" value="false" /> */}
        <Row>
          <Title>
            <FormattedMessage {...messages.name} />
          </Title>
          <Input type="text" name="subject" placeholder="Bill Gates" />
        </Row>
        <Row>
          <Title>
            <FormattedMessage {...messages.email} />
          </Title>
          <Input type="text" name="email" placeholder="startup@uw.edu" />
        </Row>
        <Row>
          <Title>
            <FormattedMessage {...messages.message} />
          </Title>
          <TextArea type="text" name="message" placeholder="How can I help?" />
        </Row>
        <Row>
          <Submission type="submit"> Submit </Submission>
        </Row>
      </Form>
    </Body>
  );
}

Contact.propTypes = {};

export default Contact;
