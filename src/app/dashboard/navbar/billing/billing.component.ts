import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {
  inputValue: number = 0;
result: number = 0;

calculate() {
  // Simple example: just return the input value
  this.result = this.inputValue * 2; // Adjust as needed for your calculation logic
}

}
