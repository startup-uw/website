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
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const Title = styled.span`
  color: black;
  margin-right: 10px;
  font-size: 1.2em;
`;

const Input = styled.input`
  border-radius: 3px;
  border-style: solid;
  border-color: #ccc;
  border-width: 1px;
  font-size: 1.5em;
`;

const TextArea = styled.textarea`
  border-radius: 3px;
  border-style: solid;
  border-color: #ccc;
  border-width: 1px;
  font-size: 1.5em;
  max-height: 250px;
`;

const Submission = styled.button`
  border-radius: 3px;
`;

const Header = styled.h1`
  font-size: 2em;
  font-weight: 300;
`;

function Contact() {
  return (
    <Body>
      <Header>
        <FormattedMessage {...messages.title} />
      </Header>
      <Form
        action="https://submit-form.com/rphbWMa0d2nFDfTe96WmN"
        target="_self"
      >
        {/* <input type="hidden" name="_redirect" value="false" /> */}
        <Row>
          <Title>
            <FormattedMessage {...messages.name} />
          </Title>
          <Input type="text" name="subject" />
        </Row>
        <Row>
          <Title>
            <FormattedMessage {...messages.email} />
          </Title>
          <Input type="text" name="email" />
        </Row>
        <Row>
          <Title>
            <FormattedMessage {...messages.message} />
          </Title>
          <TextArea type="text" name="message" />
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
