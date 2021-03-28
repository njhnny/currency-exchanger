import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange.js';





$("form#form").submit(function(event) {
  event.preventDefault();
  let amount = $("#amount").val();
  console.log(amount);
  let currency = $("#currency").val();
  console.log(currency);
  ExchangeService.getExchange()
    .then(function(response) {
      if (response instanceof Error) {
        throw Error(`API error: ${response.message}`);
      }
      console.log(response);
      $('.output').text(amount * response.conversion_rates[currency]);
    });
});