const header = ($) => {
  Drupal.behaviors.header = {
    attach(context) {
      $(document, context).ready(function () {
        $('.listing').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        });
      });
    },
  };
};
header(jQuery);
