// for some FUCKED reason you have to reload all javascripts on the 'turbolinks.load' function or else they only work after a page refresh
$(window).on('turbolinks:load', function() {
  $('.opaque').on('mouseover', function(event) {
    console.log(event.target);
    $(event.target).fadeTo(300, 1);
  })
  $('.opaque').on('mouseleave', function(event) {
    console.log(event.target);
    $(event.target).fadeTo(300, 0);
  })
})
