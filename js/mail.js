$(function() {
  String.prototype.reverse = function() {
    return this.split("").reverse().join("");
  }

  function sendFailure() {
    alert('There was a problem and your message was not sent.');
  }

  var $nameInput = $('#name');
  var $emailInput = $('#email');
  var $messageBox = $('#message');

  // This is just so API key scrapers don’t get a valid key.
  // Not a lot of bad stuff can happen if someone gets this, so I’m not worried.
  var reversedKey = "AC89vtq9ZMb_AlqqUBabI2";

  $('#send-message').click(function(event) {
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        "key": reversedKey.reverse(),
        "message": {
          "from_name": $nameInput.val(),
          "from_email": $emailInput.val(),
          "to": [
            {
              "email": "jacob.coble@openmailbox.org",
              "name": "Jacob Coble",
              "type": "to"
            }
          ],
          "autotext": "true",
          "subject": "jacobcoble.com Contact Form",
          "text": $messageBox.val()
        }
      }
    }).done(function(data) {
      if (data[0].status === "sent") {
        $nameInput.val('');
        $emailInput.val('');
        $messageBox.val('');
      } else {
        sendFailure();
      }
    }).fail(sendFailure);
  });
});
