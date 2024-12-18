import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors, ValidatorFn,
  Validators
} from '@angular/forms';
import { ExchangeTransaction } from 'src/app/models/exchange-transaction.model';



@Component({
  selector: 'app-exchange-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
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
    }, { validators: this.currencyMismatchValidator });
  }

  get isCurrencyMismatch(): boolean {
    return !!this.exchangeForm.errors?.['currencyMismatch'];
  }

  // Custom validator
  currencyMismatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const fromCurrency = control.get('fromCurrency');
    const toCurrency = control.get('toCurrency');

    return fromCurrency && toCurrency && fromCurrency.value === toCurrency.value ? { 'currencyMismatch': true } : null;
  };

  onSubmit() {
    if (this.exchangeForm.valid) {
      this.exchangeTransaction.emit(this.exchangeForm.value);
    }
  }
}
