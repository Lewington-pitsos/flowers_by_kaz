$(window).on('turbolinks:load', function() {
  console.log('image loading');

  $('.square-img-wrapper').each(function() {
    var url = $( this ).data('url');
    $element = $( this );
    var image = new Image();
    image.src = url;
    console.log($element);
    $element.css( "background-image", "url('" + url + "')" );
  })
})
