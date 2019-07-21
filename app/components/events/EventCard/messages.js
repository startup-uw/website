/*
 * EventCard Messages
 *
 * This contains all the text for the EventCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.EventCard';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'This is the event title',
  },
  body: {
    id: `${scope}.title`,
    defaultMessage: 'This is the event body',
  },
});
