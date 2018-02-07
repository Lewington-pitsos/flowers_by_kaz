// for some FUCKED reason you have to reload all javascripts on the 'turbolinks.load' function or else they only work after a page refresh
$(window).on('turbolinks:load', function() {
  $('.opaque').on('mouseover', function(event) {
    $(event.target).fadeTo(300, 1);
  })
  $('.opaque').on('mouseleave', function(event) {
    $(event.target).fadeTo(300, 0);
  })

  $(window).scroll(function() {
    var screenTop = $(window).scrollTop()
    var screenHeight = $(window).height()
    var screenBottom = screenTop+ screenHeight
    var elemTop = $('.servicee').offset().top;
    var elemBottom = elemTop + $('.servicee').height();
    console.log(screenBottom);
    console.log(elemBottom);
    if (screenBottom > elemBottom) {
      console.log('passed');
      $('servicee').removeClass('opaque');
      $('.servicee').addClass('animated fadeInUpBig');
    }
  })
})
