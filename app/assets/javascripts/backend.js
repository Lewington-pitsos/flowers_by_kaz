$(window).on('turbolinks:load', function() {
  // when a new file is selected the save option for the edit and new feilds is disabled untill the change event fires (which happens when a file actually gets uploaded)
  $('#file-upload').on('change', function() {
    $('#upload-helper').addClass('hidden');
  })

  $('#file-upload').on('click touchstart' , function(){
    $('#upload-helper').removeClass('hidden');
  });

})
