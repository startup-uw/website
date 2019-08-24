/**
 *
 * ContactForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ContactForm() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ContactForm.propTypes = {};

export default ContactForm;
