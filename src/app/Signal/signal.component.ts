import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css'],
})
export class SignalComponent {
  price: number = 100;
  total = computed(() => this.price * this.quantity());
  quantity = signal<number>(0);
  updatedTotal: number[] = [];

  constructor() {
    effect(()=> {
      this.updatedTotal.push(this.total());
    })
  }

  increase(): void {
    // this.quantity.set(this.quantity() + 1);
    this.quantity.update((oldValue) => oldValue + 1);
  }

  decrease(): void {
    if (this.quantity() - 1 > 0) {
      // this.quantity.set(this.quantity() - 1);
      this.quantity.update((oldValue) => oldValue - 1);
    } else {
      // this.quantity.set(0);
      this.quantity.update((oldValue) => 0);
    }
  }

  rest(): void {
    this.quantity.set(0);
  }

  restOldTotals() : void {
    this.updatedTotal = [0];
  }
}
