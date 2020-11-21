import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

fetch('https://v6.exchangerate-api.com/v6/1634eff7eeeb331eae57c486/latest/USD')
  .then( response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });