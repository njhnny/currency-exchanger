import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("form#form").submit(function(event) {
  event.preventDefault();
  let amount = $("#amount").val();
  console.log(amount);
  let currency = $("#currency").val();
  console.log(currency);
  fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log(response.json);
      return response.json();
    })
    .catch(function(error) {
      return error;
    });
});

