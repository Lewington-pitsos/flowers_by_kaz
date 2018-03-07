$(window).on('turbolinks:load', function() {
  // when a new file is selected the save option for the edit and new feilds is disabled untill the change event fires (which happens when a file actually gets uploaded)
  $('.file-upload').on('change', function() {
    console.log('changed');
    $('#upload-helper').addClass('super-hidden');
    $('.loader-wrapper').addClass('super-hidden');
  })

  $('.file-upload').on('click touchstart' , function(){
    $('#upload-helper').removeClass('super-hidden');
    $('.loader-wrapper').removeClass('super-hidden');
  });

})
