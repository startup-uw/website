/*
 * ContactPage Messages
 *
 * This contains all the text for the ContactPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ContactPage';

export default defineMessages({
  welcome: {
    id: `${scope}.welcome`,
    defaultMessage: 'Have any questions?',
  },
  facebook: {
    id: `${scope}.action`,
    defaultMessage: 'Send us a message on Facebook',
  },
  mail: {
    id: `${scope}.action`,
    defaultMessage: 'Write us an email!',
  },
});
