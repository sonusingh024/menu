import banner from './banner.twig';

import bannerData from './banner.yml';
import './_banner.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/banner' };

export const Banners = () => banner(bannerData);
