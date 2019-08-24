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

import messages from './messages';

const Welcome = styled.div`
  font-size: 1.5em;
  color: black;
  padding-bottom: 20px;
  font-weight: bold;
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
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export function ContactPage() {
  return (
    <Wrapper>
      <Title text="CONTACT US" />
      <Body>
        <div>
          <Welcome>
            <FormattedMessage {...messages.welcome} />
          </Welcome>
          <Action>
            <FormattedMessage {...messages.facebook} />
            <Separator>
              <b>OR</b>
            </Separator>
            <FormattedMessage {...messages.mail} />
          </Action>
        </div>
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
