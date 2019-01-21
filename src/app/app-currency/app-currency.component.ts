import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-app-currency',
  templateUrl: './app-currency.component.html',
  styleUrls: ['./app-currency.component.css']
})
export class AppCurrencyComponent implements OnInit {
  Codes;
  Currencies;
  countries;
  keys = Object.keys;
  constructor(private Currencyservice: CurrencyService) { }

  ngOnInit() {
    this.Currencyservice.getAllCurrency().subscribe(res => {
      this.Codes = res;
    }, err => {
      console.log(err);
    });
  }
  onchange(event) {
    const i = event.target.value;
    const curencies = this.Codes[i].Name;
    const countries = this.Codes[i].Countries;
    this.Currencies = Object.keys(curencies).map(
      (element) => ({ [element]: curencies[element] })
    );
    this.countries = countries.map(country => {
      return Object.keys(country).map(
        (element) => ({ [element]: country[element] }));
    });
    console.log(this.countries);
  }

}
