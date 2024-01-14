import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private balance: number = 1000; // Initial balance

  getBalance(): number {
    return this.balance;
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.warn(this.balance)
      return true;
    } else {
      return false;
    }
  }
}
