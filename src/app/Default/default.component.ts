import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent {
  price: number = 100;
  total: number = 0;
  quantity: number = 0;
  updatedTotal: number[] = [];

  increase(): void {
    this.quantity++;
    this.total = this.price * this.quantity;
    this.updatedTotal.push(this.total);
  }
  
  decrease(): void {
    if ((this.quantity - 1) > 0) {
      this.quantity--;
      this.total = this.price * this.quantity;
    } else {
      this.quantity = 0;
      this.total = 0;
    }
    this.updatedTotal.push(this.total);
  }

  rest(): void {
    this.updatedTotal.push(0);
    this.quantity = 0;
    this.total = 0;
  }

  restOldTotals() : void {
    this.updatedTotal = [0];
  }
}
