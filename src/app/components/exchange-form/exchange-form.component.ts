import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExchangeTransaction } from 'src/app/models/exchange-transaction.model';



@Component({
  selector: 'app-exchange-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.css'],
})
export class ExchangeFormComponent {
  @Output() exchangeTransaction = new EventEmitter<ExchangeTransaction>();
  exchangeForm: FormGroup;

  currencies = ['USD', 'EUR', 'GBP', 'BTC', 'ETH']; // Add more currencies as needed

  constructor(private fb: FormBuilder) {
    this.exchangeForm = this.fb.group({
      amount: [null, [Validators.required, Validators.min(0.01)]],
      fromCurrency: [null, Validators.required],
      toCurrency: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.exchangeForm.valid) {
      this.exchangeTransaction.emit(this.exchangeForm.value);
    }
  }
}
