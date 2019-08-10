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
    defaultMessage: '{title}',
  },
  details: {
    id: `${scope}.details`,
    defaultMessage: '{date}',
  },
  desc: {
    id: `${scope}.desc`,
    defaultMessage: '{description}',
  },
});
