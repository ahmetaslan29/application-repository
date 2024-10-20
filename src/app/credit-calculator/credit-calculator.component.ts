import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credit-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './credit-calculator.component.html',
  styleUrls: ['./credit-calculator.component.css']
})
export class CreditCalculatorComponent {
  loanAmount: number = 0;
  interestRate: number = 0;
  loanTerm: number = 0;
  monthlyPayment: number = 0;

  calculate() {
    const rate = this.interestRate / 100 / 12;
    const n = this.loanTerm * 12;
    this.monthlyPayment = (this.loanAmount * rate) / (1 - Math.pow(1 + rate, -n));
  }
}
