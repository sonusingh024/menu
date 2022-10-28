import footer from './footer.twig';

import footerData from './footer.yml';
import './_footer.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/footer' };

export const Footers = () => footer(footerData);
