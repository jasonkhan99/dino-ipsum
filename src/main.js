import $ from 'jquery';
// import '//fonts.googleapis.com/css?family=Raleway';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    $(".name-button").hide();
    (async () => {
      let dinoIpsumGenerator = new DinoIpsumGenerator();
      const response = await dinoIpsumGenerator.getDinoNames();
      getNames(response);
    })();
    $("#guess").show();
    

  function getNames(response) {
    if (response) {
      let splitResponse = response[0][0].split("");
      for (let i=0; splitResponse.length > i; ++i) {
        splitResponse.shift();
        splitResponse.push("__  ");
      }
      let hiddenResponse = splitResponse.join("");
      $('.showName').text(`${hiddenResponse}`);
    } else {
      $('.showName').text(`There was an error handling your request.`);
    }
  }

  $("#guess").submit(function(event) {
    event.preventDefault();
    let inputString = $("#letter").val();
    let letterArray = [];
    if (inputString.length !== 1 || inputString.match(/[^a-z]/i)) {
      $(".error").html("<p>Please only enter one letter.</  p>");
    } else {
      $(".error").hide();
    }      
    $("#letter").val("");
  }
  });
});

// if (response.includes(inputString)) {
//   for (i = 0; i < response.length; i++) {
//     letterArray.push(inputString);

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