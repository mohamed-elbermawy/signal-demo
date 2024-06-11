import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css'],
})
export class SignalComponent {
  price: number = 100;
  total = computed(() => this.price * this.quantity());
  quantity = signal<number>(0);

  constructor() {}

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
}
