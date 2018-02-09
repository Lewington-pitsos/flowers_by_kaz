// These are all the listeners related to showing work objects


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


$(window).on('turbolinks:load', function() {

  $('.work-overlay').on('click', function(e) {
    // when a work is clicked on from the show page, that work gets dieplayed big over a black overlay
    e.preventDefault()
    $('.work-show').css('display', 'block');
    $('.work-show').fadeTo(500, 1);
    showWork($(e.target))
  })

  $('.work-overlay-clear').on('click', function() {
    // when the overlay is closed it is faded out and then hidden. Changes to the background made while the overlay was up are undone too
    $('.work-show').fadeTo(500, 0);
    setTimeout(function() {
      $('.work-show').css('display', 'none');
    }, 502)
    $('.work-overlay').fadeTo(300, 0);
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
