import { DinoIpsumGenerator } from './../src/dino-ipsum.js';

describe('test replace dino name function', () => {
  (async () => {
    let dinoIpsumGenerator = new DinoIpsumGenerator();
    const response = await dinoIpsumGenerator.getDinoNames();
    getNames(response);
  })();

  test('Should turn dino name into an array of characters, then shift each character out of array, then push underscores to array', () => {
    expect(response.replaceDinoName()).toEqual(false);
  
  });
});

$("#guess").submit(function(event) {
  event.preventDefault();
  let inputString = $("#letter").val();
  if (inputString.length !== 1 || inputString.match(/[^a-z]/i)) {
    $(".error").html("<p>Please only enter one letter.</p>");
  } else if (checkArray.includes(inputString)) {
    for (i = 0; i < checkArray.length; i++) {
      hiddenResponse.splice(i, 1, inputString);
    }
  }
  $("#letter").val("");
});