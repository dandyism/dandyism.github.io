$(function() {
  $('#resume').on('click', '.modal-close', function(event) {
    event.preventDefault();

    $(event.delegateTarget).hide();
  });

  $('.show-resume').on('click', function(event) {
    event.preventDefault();

    $('#resume').show();
  });
});
