/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

/*
const MainText = styled.span`
  letter-spacing: 8px;
`;
*/

export default defineMessages({
  motto: {
    id: `${scope}.motto`,
    defaultMessage: `ideate / iterate / innovate`,
  },
  call: {
    id: `${scope}.call`,
    defaultMessage: 'join the movement.',
  },
});
