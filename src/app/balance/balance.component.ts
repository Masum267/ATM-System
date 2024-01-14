import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-balance',
  template: `
    <h2>Your Balance: {{ balance }} Taka</h2>
  `,
})
export class BalanceComponent implements OnInit {
  balance: number | undefined;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.balance = this.accountService.getBalance();
  }
}
