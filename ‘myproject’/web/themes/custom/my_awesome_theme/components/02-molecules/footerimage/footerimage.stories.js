import footerimage from './footerimage.twig';

import footerimageData from './footerimage.yml';
import './_footerimage.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/footerimage' };

export const Footerimages = () => footerimage(footerimageData);
