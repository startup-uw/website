/*
 * ContactForm Messages
 *
 * This contains all the text for the ContactForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ContactForm';

export default defineMessages({
  message: {
    id: `${scope}.message`,
    defaultMessage: 'Message:',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name:',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email: ',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Contact',
  },
});
