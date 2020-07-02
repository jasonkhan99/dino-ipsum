import $ from 'jquery';
// import '//fonts.googleapis.com/css?family=Raleway';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/skeleton.css';
import './css/normalize.css';
import './css/custom.css';
import './css/styles.css';
import { DinoIpsumGenerator } from './../src/dino-ipsum.js';

// function isAlphanumericKey(keycode) {
//   return (keycode >= 48) && (keycode <= 90);
// }

$(document).ready(function () {
  let response;
  let splitResponse;
  $("#dinoName").click(function () {
    $(".name-button").hide();
    (async () => {
      let dinoIpsumGenerator = new DinoIpsumGenerator();
      response = await dinoIpsumGenerator.getDinoNames();
      getNames(response);
    })();
    $("#guess").show();

    function getNames(response) {
      if (response) {
        splitResponse = response[0][0].split("");
        for (let i = 0; splitResponse.length > i; ++i) {
          splitResponse.shift();
          splitResponse.push("__  ");
        }
        let hiddenResponse = splitResponse.join("");
        $('.showName').text(`${hiddenResponse}`);
      } else {
        $('.showName').text(`There was an error handling your request.`);
      }
    }

    $("#guess").submit(function (event) {
      event.preventDefault();
      let checkArray = response[0][0].toLowerCase().split("");
      let inputString = $("#letter").val();
      if (inputString.length !== 1 || inputString.match(/[^a-z]/i)) {
        $(".error").html("<p>Please only enter one letter.</p>");
      } else if (!checkArray.includes(inputString)) {
        $("#letter").val("");
        return $(".error").html("<p>Incorrect</p>");
      } else if (checkArray.includes(inputString)) {
        for (let i = 0; i < checkArray.length; i++) {
          if (checkArray[i].includes(inputString)) {
            splitResponse.splice(i, 1, inputString);
          }        
        }
        $(".showName").text(splitResponse.join(" "));
      } else {
        $(".error").hide();
      }
      $("#letter").val("");
    });
  });
});