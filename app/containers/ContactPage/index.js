/**
 *
 * ContactPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Wrapper } from '../../components/page/Wrapper';
import Title from '../../components/page/Title';
import ContactForm from '../../components/Contact/index';

import messages from './messages';

const Welcome = styled.div`
  font-size: 1.5em;
  color: black;
  margin-bottom: 75px;
  font-weight: bold;
  line-height: 1.5;
`;

const Action = styled.div`
  font-size: 1.5em;
  color: black;
  display: flex;
  flex-direction: column;
`;

const Separator = styled.p`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Body = styled.div`
  padding-left: 25px;
  @media only screen and (max-width: 650px) {
    padding-left: 0px;
  }
`;

const Link = styled.a`
  margin-left: 4px;
  color: black;
  background-color: white;
  font-weight: 300;
  transition: background-color 0.5s;
  padding: 5px 5px 5px 3px;
  border-radius: 3px;
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  @media only screen and (max-width: 680px) {
    margin-top: 2px;
    padding: 1px 1px 1px 1px;
  }
`;

const Section = styled.section`
  margin-bottom: 200px;
`;

const Option = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export function ContactPage() {
  return (
    <Wrapper>
      <Title text="GET IN TOUCH" />
      <Body>
        <Section>
          <Welcome>
            <FormattedMessage
              {...messages.welcome}
              values={{
                br: <br />,
              }}
            />
          </Welcome>
          <Action>
            <Option>
              <FormattedMessage
                {...messages.facebook}
                values={{
                  fb: msg => (
                    <Link href="https://www.facebook.com/StartupUW/">
                      {msg}
                    </Link>
                  ),
                }}
              />
            </Option>
            <Separator>
              <b>OR</b>
            </Separator>
            <Option>
              <FormattedMessage
                {...messages.mail}
                values={{
                  email: msg => (
                    <Link href="mailto:startup@uw.edu"> {msg} </Link>
                  ),
                }}
              />
            </Option>
          </Action>
        </Section>
        <Section>
          <ContactForm />
        </Section>
      </Body>
    </Wrapper>
  );
}

ContactPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ContactPage);
