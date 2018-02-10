$(window).on('turbolinks:load', function() {
  $('#file-upload').on('change', function() {
    $('#upload-helper').addClass('hidden');
  })
})
