$(document).ready(function(){

  $('.rotation_switches input[type="checkbox"]').change(function() {
    name = $(this).parent().attr("id").replace("rotation_switch_", "");
    if ($(this).is(':checked')) {
      $('.rotation_line_' + name + '_off').hide();
      $('.rotation_line_' + name + '_on').show();
    } else { 
      $('.rotation_line_' + name + '_on').hide();
      $('.rotation_line_' + name + '_off').show();
    }
  });
  $('.rotation_switches input[type="checkbox"]').prop("disabled", false);
});
