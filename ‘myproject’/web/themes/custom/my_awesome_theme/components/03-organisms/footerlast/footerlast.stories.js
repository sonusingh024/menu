import footerlast from './footerlast.twig';
import footerlastData from './footerlast.yml';
import './_footerlast.scss';
import footerdowndata from '../../02-molecules/footerdown/footerdown.yml';
import footerimagedata from '../../02-molecules/footerimage/footerimage.yml';
/**
 * Storybook Definition.
 */

export default { title: 'Organisms/footerlast' };
export const last = () =>
  footerlast({ ...footerlastData, ...footerdowndata, ...footerimagedata });
