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
  first: {
    id: `${scope}.first`,
    defaultMessage: `IDEATE`,
  },
  second: {
    id: `${scope}.second`,
    defaultMessage: `ITERATE`,
  },
  third: {
    id: `${scope}.third`,
    defaultMessage: `INNOVATE`,
  },
});
