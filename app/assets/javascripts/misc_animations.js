function fadeAndHide(selector, time = 500) {
  // fades the element out over a certain period and one milisecond later styles it to be invisible to the DOM
  $element = $(selector);
  $element.fadeTo(time, 0);
  setTimeout(function() {
    $element.addClass('hidden');
    // you'll need to have some CSS for the .hidden class
  }, time + 1)
}

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

  // in case we clicked on a link without hovering off it
  $('.opaque.hover-reveal').fadeTo(100, 0)

  // if elligable elements exist, on every scroll event we check if certain elements are in view, and fade them in if they are visible
  var hiddenServiceElements = $('.service.opaque');
  if (hiddenServiceElements.length) {
    fadeInIfVisible(hiddenServiceElements);

    $(window).scroll(function() {
      fadeInIfVisible(hiddenServiceElements);
    });
  }

  // fade out all flashes after 10 seconds
  setTimeout(function() {
    fadeAndHide('.flash');
  }, 4000)

	// get current URL path and assign 'active' class to the proper nav link
	var pathname = window.location.pathname;
  $('.navbar-nav > li').removeClass('active');
	$('.navbar-nav > li > a[href="'+pathname+'"]').parent().addClass('active');


  // Profile images fading interchange

  $('.secondary-profile').on('click', function(event) {
    $(this).fadeOut(400)
    $('.default-profile').fadeTo(400, 1)
  })

  $('.default-profile').on('click', function(event) {
    $(this).fadeTo(400, 0.01)
    $('.secondary-profile').fadeTo(400, 1)
  })

})
