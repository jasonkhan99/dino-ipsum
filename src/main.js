import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '//fonts.googleapis.com/css?family=Raleway'
import './css/skeleton.css';
import './css/normalize.css';
import './css/custom.css';
import './css/styles.css';
import { DinoIpsumGenerator } from './../src/dino-ipsum.js';

function isAlphanumericKey(keycode) {
  return (keycode >= 48) && (keycode <= 90);
}

$(document).ready(function () {
  
  $("#dinoName").click(function() {
    
    (async () => {
      let dinoIpsumGenerator = new DinoIpsumGenerator();
      const response = await dinoIpsumGenerator.getDinoNames();
      getNames(response);
    })();
    
    function getNames(response) {
      if (response) {
        $('.showName').text(`${response[0][0].replaceDinoName()}`);
      } else {
        $('.showName').text(`There was an error handling your request.`);
      }
    }
  });

  $(".keyboard-key").on({
    // Upon mouse-down, make the selectedLetter region immediately visible again
    // and show the letter that was pressed (which is exactly the button's label).
    // Also, speak the letter.
    mousedown: function() {
        $("#selectedLetter").stop().css('opacity', '1.0').text($(this).text());
        responsiveVoice.speak($(this).text().toLowerCase(), "UK English Male");
    },

    // Upon mouse-up, fade away the shown letter.
    mouseup: function() {
        $("#selectedLetter").stop().animate({opacity: 0}, 1000);
    }
  });
});

$(document).keydown(function (e) {
  if (isAlphanumericKey(e.which)) {
      var myID = "#key-" + String.fromCharCode(e.which);
      $(myID).trigger("mousedown").addClass('active-style');
  }
});

// Emulates a mouseup event on a keyboard-key button.
$(document).keyup(function (e) {
  if (isAlphanumericKey(e.which)) {
      var myID = "#key-" + String.fromCharCode(e.which);
      $(myID).trigger("mouseup").removeClass('active-style');
  }
});