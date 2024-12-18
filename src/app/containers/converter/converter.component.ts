import { Component } from '@angular/core';
import { ExchangeService } from 'src/app/services/exchange.service';
import { ExchangeFormComponent } from "../../components/exchange-form/exchange-form.component";
import { ExchangeTransaction } from 'src/app/models/exchange-transaction.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [ExchangeFormComponent, CommonModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterContainerComponent {
  result: number | null = null;
  errorMessage: string | null = null;

  constructor(private exchangeService: ExchangeService) {}

  onExchange(transaction: ExchangeTransaction) {
    this.exchangeService.getExchangeRate(transaction.fromCurrency, transaction.toCurrency).subscribe(
      (rate) => {
        this.result = transaction.amount * rate;
        this.errorMessage = null;
      },
      (error) => {
        this.result = null;
        this.errorMessage = 'Error fetching exchange rate. Please try again later.';
      }
    );
  }
}
