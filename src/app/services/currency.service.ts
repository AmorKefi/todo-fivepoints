import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }
  getAllCurrency() {
    return this.http.get('http://chehir.tn:3000/currencies');
  }
}
