import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange.js';

function printResponse(test) {
  if (isNaN(test)) {
    $('.output').text("please enter a valid currency code");
  } else {
    $('.output').text(test);
  }
}

$("form#form").submit(function(event) {
  event.preventDefault();
  let amount = $("#amount").val();
  let currency = $("#currency").val();
  ExchangeService.getExchange()
    .then(function(response) {
      if (response instanceof Error) {
        throw Error(`API error: ${response.message}`);
      }
      let conversion = amount * response.conversion_rates[currency];
      printResponse(conversion);
    });
});