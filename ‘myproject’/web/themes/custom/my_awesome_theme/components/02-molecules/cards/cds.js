(($) => {
  Drupal.behaviors.status = {
    attach() {
      setInterval(() => {
        $('.status--error').fadeToggle();
      }, 500);
    },
  };
  console.log('hello');
})(jQuery);
