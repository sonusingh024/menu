import landingpage from './landingpage.twig';
import landingpageData from './landingpage.yml';
import bannerData from '../../02-molecules/banner/banner.yml';
import listingData from '../../03-organisms/listing/listing.yml';
import formsectionData from '../../02-molecules/formsection/formsection.yml';
import footertopData from '../../03-organisms/footertop/footertop.yml';
import footerlastData from '../../03-organisms/footerlast/footerlast.yml';
/**
 * Storybook Definition.
 */
export default { title: 'Templates/landingPagedemo' };

export const page = () =>
  landingpage({
    ...landingpageData,
    ...bannerData,
    ...listingData,
    ...formsectionData,
    ...footertopData,
    ...footerlastData,
  });
