function fadeInImage($element, url) {
  // takes an element and an image url and make the element invisible
  // sets the element's background to that url and fades the element in
  $element.closest('.loading-overlay-holder').find('.loader-holder').remove()
  $element.css( "background-image", "url('" + url + "')" ).fadeTo(800, 1)
}

function loadIndirectly($element) {
  // expects to be passed a jquery DOM element with a url data attribute that points to an image
  // creates a new image object and tells it to load that url
  // when the url is loaded, the background of $element is changed to that same image and the whole affair is faded in
  var url = $element.data('url');
  var image = new Image();
  image.src = url;
  $(image).on('load', fadeInImage.bind(this, $element, url))
}


$(window).on('turbolinks:load', function() {
  // loades all the square work images on the page in indirectly so it looks smooth
  $('.square-img-wrapper').each(function() {
    loadIndirectly($(this));
  })
})
