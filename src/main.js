import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DinoIpsumGenerator } from './../src/dino-ipsum.js';

$(document).ready(function () {
  

  (async () => {
    let dinoIpsumGenerator = new DinoIpsumGenerator();
    const response = await dinoIpsumGenerator.getDinoNames();
    getNames(response);
  })();

  function getNames(response) {
    if (response) {
      $('.showName').text(`${response[0][0]}`);
    } else {
      $('.showName').text(`There was an error handling your request.`)
    }
  }
});