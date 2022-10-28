import footertop from './footertop.twig';
import footertopData from './footertop.yml';
import './_footertop.scss';
import footerdata from '../../02-molecules/footer/footer.yml';

/**
 * Storybook Definition.
 */

export default { title: 'Organisms/footertop' };
export const top = () => footertop({ ...footertopData, ...footerdata });
