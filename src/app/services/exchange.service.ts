// exchange.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExchangeService {
  private mockRates: any = {
    USD: { EUR: 0.85, GBP: 0.75, BTC: 0.000023, ETH: 0.00035 },
    EUR: { USD: 1.18, GBP: 0.88, BTC: 0.000027, ETH: 0.00041 },
    GBP: { USD: 1.33, EUR: 1.14, BTC: 0.000030, ETH: 0.00045 },
    BTC: { USD: 43000, EUR: 37000, GBP: 32000, ETH: 15 },
    ETH: { USD: 2900, EUR: 2500, GBP: 2200, BTC: 0.067 },
  };

  getExchangeRate(fromCurrency: string, toCurrency: string): Observable<number> {
    const rate = this.mockRates[fromCurrency]?.[toCurrency] || 0;
    return of(rate);
  }
}
