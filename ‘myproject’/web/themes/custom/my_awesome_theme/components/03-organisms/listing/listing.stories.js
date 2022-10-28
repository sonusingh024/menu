import listing from './listing.twig';
import listingData from './listing.yml';
import carddata from '../../02-molecules/cards/cards.yml';
import 'slick-carousel/slick/slick';
import '../../../node_modules/slick-carousel/slick/slick.scss';
import './_listing.scss';
import './listing';
import '../../../node_modules/slick-carousel/slick/slick-theme.scss';

/**
 * Storybook Definition.
 */

export default { title: 'Organisms/card listing' };

export const card = () => listing({ ...listingData, ...carddata });
