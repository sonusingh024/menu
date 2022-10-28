import footerdown from './footerdown.twig';

import footerdownData from './footerdown.yml';
import './_footerdown.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/footerdown' };

export const Footerdown = () => footerdown(footerdownData);
