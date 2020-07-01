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