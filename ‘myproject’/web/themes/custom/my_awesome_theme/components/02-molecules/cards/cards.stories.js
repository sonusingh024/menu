import cards from './cards.twig';

import cardsData from './cards.yml';
import './_cards.scss';
import './cds';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/cards' };

export const Card = () => cards(cardsData);
