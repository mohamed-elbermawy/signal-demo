import { Component } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css'],
})
export class SignalComponent {
  price: number = 100;
  total: number = 0;
  quantity: number = 0;

  increase(): void {
    this.quantity++;
    this.total = this.price * this.quantity;
  }
  
  decrease(): void {
    if ((this.quantity - 1) > 0) {
      this.quantity--;
      this.total = this.price * this.quantity;
    } else {
      this.quantity = 0;
      this.total = 0;
    }
  }
}
