const menuHeader = ($) => {
  Drupal.behaviors.menuHeader = {
    attach(context) {
      $(document, context).ready(function () {
        $('.main-menu__item').mouseenter(function () {
          $('.bg-overlay').css('height', '100%');
        });
        $('.main-menu__item').mouseleave(function () {
          $('.bg-overlay').css('height', '0');
        });
      });
    },
  };
};
menuHeader(jQuery);
