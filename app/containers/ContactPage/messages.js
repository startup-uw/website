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
    defaultMessage:
      'Have a question? {br} Interested in sponsoring our organization?',
  },
  facebook: {
    id: `${scope}.action`,
    defaultMessage: 'Send us a message on our Facebook <fb>@StartupUW</fb>',
  },
  mail: {
    id: `${scope}.action`,
    defaultMessage: 'Write us an email at <email>startup@uw.edu</email>',
  },
});
