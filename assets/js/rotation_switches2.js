$(document).ready(function(){

  $('.rotation_switches input[type="checkbox"]').change(function() {
    name = $(this).parent().attr("id").replace("rotation-switch-", "");
    if ($(this).is(':checked')) {
      $('.rotation-line-' + name + '-off').hide();
      $('.rotation-line-' + name + '-on').show();
    } else { 
      $('.rotation-line-' + name + '-on').hide();
      $('.rotation-line-' + name + '-off').show();
    }
  });
  $('.rotation_switches input[type="checkbox"]').prop("disabled", false);
});
