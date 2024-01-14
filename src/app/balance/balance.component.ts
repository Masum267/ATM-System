import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-balance',
  template: `
    <h2>Your Current Balance: {{ currentBalance | async }} Taka</h2>
  `,
})
export class BalanceComponent implements OnInit {
  balance: number | undefined;
  currentBalance: Observable<number> | undefined;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.currentBalance = this.accountService.currBal;
  }
}
