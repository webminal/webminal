$(function() {
  $('.flash-message, .flash-error').each(function() {
    $(this).hide();
    
    $(this).addClass('notification');
    $(this).on('click', function() {
      $(this).slideUp('fast', function() { $(this).remove(); });
    });
    
    $(this).slideDown('fast');
    setTimeout(function() { $(this).trigger('click'); }, 5000);
  });
});
