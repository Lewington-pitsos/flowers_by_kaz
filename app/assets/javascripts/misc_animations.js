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

function showWork($element) {
  // grabs the data-attributes from the passed in element and sets the values of the currently shown image to those values
  // also records which element is currently being pointed at
  var data = $element.data();
  $('#work-image').attr('src', data.url);
  $('#work-title').text(data.title);
  $('#work-description').text(data.caption);
  $('#work-holder').data('element', data.number)

  // we also fade in the overlay of the selected elemtn in the background
  $('.work-overlay').fadeTo(300, 0);
  $element.fadeTo(300, 1);
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

  $('.work-overlay').on('click', function(e) {
    e.preventDefault()
    $('.work-show').css('display', 'block');
    $('.work-show').fadeTo(500, 1);
    showWork($(e.target))
  })

  $('.work-overlay-clear').on('click', function() {
    $('.work-show').fadeTo(500, 0);
    setTimeout(function() {
      $('.work-show').css('display', 'none');
    }, 502)
  })

  $('.work-nav.prev').on('click', function() {
    // finds the count id of the currently displayed work
    // subtracts one from this id, and displays the corresponding work
    // if no work corresponds to the new id, selects the highest-count-id work
    var selector = '#work-' + ($('#work-holder').data('element') - 1);
    if (!$(selector).length) {
      selector = '#work-' + ($('.work-overlay').length - 1);
    }
    showWork($(selector))
  })

  $('.work-nav.next').on('click', function() {
    // finds the count id of the currently displayed work
    // adds one to this id, and displays the corresponding work
    // if no work corresponds to the new id, selects the lowest-count-id work
    var selector = '#work-' + ($('#work-holder').data('element') + 1);
    if (!$(selector).length) {
      selector = '#work-1'
    }
    console.log(selector);
    showWork($(selector))
  })


})
