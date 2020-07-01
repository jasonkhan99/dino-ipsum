export class DinoIpsumGenerator {
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
}

// function replaceDinoName(response) {
//   let splitResponse = response.split("");
//   for (let i=0; splitResponse.length > i; ++i) {
//     splitResponse.shift().push("_ ");
//   }
//   return splitResponse.join("");
// }
