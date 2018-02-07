$(function() {
  $('.opaque').on('mouseover', function(event) {
    console.log(event.target);
    $(event.target).fadeTo(300, 1);
  })
  $('.opaque').on('mouseleave', function(event) {
    console.log(event.target);
    $(event.target).fadeTo(300, 0);
  })
})
