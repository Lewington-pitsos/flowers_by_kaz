function fadeInIfVisible(elements) {
  // takes in a collection of JQuery elements
  // works out the current height of the visible window's bottom
  var screenTop = $(window).scrollTop();
  var screenHeight = $(window).height();
  var screenBottom = screenTop + screenHeight;

  // checks each of the passed in elements to see whether their top is more than 120 pixels above the window bottom
  $(elements).each(function() {
    var elemTop = $(this).offset().top;
    var elemBottom = elemTop + 120;
    if (screenBottom > elemBottom) {

      // if so we remove and add some classes, causeing a fade in
      $(this).removeClass('hidden');
      $(this).addClass('animated fadeInUp');
    }
  });
}


// for some FUCKED reason you have to reload all javascripts on the 'turbolinks.load' function or else they only work after a page refresh
$(window).on('turbolinks:load', function() {

  // fades in (and then out) overlays when moused over
  $('.content-wrapper').on('mouseover', '.opaque.hover-reveal', function(event) {
    $(event.target).fadeTo(300, 1);
  })
  $('.content-wrapper').on('mouseleave', '.opaque.hover-reveal', function(event) {
    $(event.target).fadeTo(300, 0);
  })

  // if elligable elements exist, on every scroll event we check if certain elements are in view, and fade them in if they are visible
  var hiddenServiceElements = $('.service.opaque');
  if (hiddenServiceElements.length) {
    fadeInIfVisible(hiddenServiceElements);

    $(window).scroll(function() {
      fadeInIfVisible(hiddenServiceElements);
    });
  }

})
