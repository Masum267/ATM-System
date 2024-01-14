import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private balance: BehaviorSubject<number> = new BehaviorSubject<number>(10000); // Initial balance
  public currBal: Observable<number> = this.balance.asObservable();
  

  getBalance(): number {
    return this.balance.value;
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance.value) {
      this.balance.next(this.balance.value - amount);
      console.warn(this.currBal)
      return true;
    } else {
      return false;
    }
  }
}
