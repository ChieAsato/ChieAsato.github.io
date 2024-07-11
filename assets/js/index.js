
window.addEventListener("load", function () {

  $('#jsi-menu-toggle').click(function () {
    $('#jsi-menu').toggleClass('active');

    $('.l-header__btn-line').each(function () {
      const $line = $(this);
      if ($('#jsi-menu').hasClass('active')) {
        $line.removeClass('close').addClass('active');
      } else {
        $line.removeClass('active').addClass('close');
      }
    });
  });

});
