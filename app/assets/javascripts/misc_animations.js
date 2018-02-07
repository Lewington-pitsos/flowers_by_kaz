// for some FUCKED reason you have to reload all javascripts on the 'turbolinks.load' function or else they only work after a page refresh
$(window).on('turbolinks:load', function() {
  $('.opaque').on('mouseover', function(event) {
    $(event.target).fadeTo(300, 1);
  })
  $('.opaque').on('mouseleave', function(event) {
    $(event.target).fadeTo(300, 0);
  })

  $(window).scroll(function() {
    var serviceSelector = '.service.hidden'
    var screenTop = $(window).scrollTop();
    var screenHeight = $(window).height();
    var screenBottom = screenTop + screenHeight;

    $(serviceSelector).each(function() {
      var elemTop = $(this).offset().top;
      var elemBottom = elemTop + $(this).height();
      if (screenBottom > elemBottom) {
        $(this).removeClass('hidden');
        $(this).addClass('animated fadeInUpBig');
      }
    })


  })
})
