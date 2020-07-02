export class DinoIpsumGenerator {

  constructor() {
    this.counter = 10;
  }

  async getDinoNames() {
    try {
      let response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }

  decrementCounter() {
    this.counter --;
  }
}
