import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-withdraw',
  template: `
    <input [(ngModel)]="withdrawAmount" placeholder="Enter amount" />
    <button (click)="withdraw()">Withdraw</button>
    <p *ngIf="withdrawMessage">{{ withdrawMessage }}</p>
  `,
})
export class WithdrawComponent {
  withdrawAmount: any;
  withdrawMessage: any;

  constructor(private accountService: AccountService) {}

  withdraw(): void {
    if (this.accountService.withdraw(this.withdrawAmount)) {
      this.withdrawMessage = `Successfully withdrawn $${this.withdrawAmount}.`;
      console.log(this.withdrawAmount)
    } else {
      this.withdrawMessage = 'Invalid amount or insufficient balance.';
    }
  }
}
