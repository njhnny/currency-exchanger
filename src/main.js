import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
  fetch('https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD')
    .then( response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
  });
});
