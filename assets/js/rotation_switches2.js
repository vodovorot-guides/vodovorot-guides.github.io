$(document).ready(function(){

  $('.rotation_switches input[type="checkbox"]').change(function() {
    name = $(this).parent().attr("id").replace("rotation_switch_", "");
    if ($(this).is(':checked')) {
      $('.rotation_line-' + name + '-off').hide();
      $('.rotation_line-' + name + '-on').show();
    } else { 
      $('.rotation_line-' + name + '-on').hide();
      $('.rotation_line-' + name + '-off').show();
    }
  });
  $('.rotation_switches input[type="checkbox"]').prop("disabled", false);
});
