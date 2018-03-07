function fadeInImage($element, url) {
  $element.css( "background-image", "url('" + url + "')" ).fadeTo(800, 1);
}


$(window).on('turbolinks:load', function() {
  console.log('image loading');

  $('.square-img-wrapper').each(function() {
    var url = $( this ).data('url');
    $element = $( this );
    var image = new Image();
    image.src = url;
    $(image).on('load', fadeInImage.bind(this, $element, url))
  })
})
