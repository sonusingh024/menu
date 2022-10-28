import formsection from './formsection.twig';
import formsectionData from './formsection.yml';
import './_formsection.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/formsection' };

export const Formsections = () => formsection(formsectionData);
