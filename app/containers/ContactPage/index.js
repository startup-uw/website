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
  padding-bottom: 20px;
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
`;

const Link = styled.a`
  color: #43c7f2;
  display: contents;
  font-weight: 300;
`;

const Section = styled.section`
  margin-bottom: 200px;
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
            <FormattedMessage
              {...messages.facebook}
              values={{
                fb: msg => (
                  <Link href="https://www.facebook.com/StartupUW/">{msg}</Link>
                ),
              }}
            />
            <Separator>
              <b>OR</b>
            </Separator>
            <FormattedMessage
              {...messages.mail}
              values={{
                email: msg => <Link href="mailto:startup@uw.edu"> {msg} </Link>,
              }}
            />
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
