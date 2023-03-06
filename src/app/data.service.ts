import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// export let Index: number;
export class DataServices {
  index: number = 0;
  searchText: BehaviorSubject<string> = new BehaviorSubject('');
  products: Product[] = [
    {
      id: 1,
      price: 700,
      name: 'Lenovo 4500',
      rate: 4,
      disc: 'Lenovo ThinkPad sa 15,6 inch ekranom 12GB ram memorije i 256GB SSD ',
    },
    {
      id: 2,
      price: 600,
      name: 'Lenovo 3500a',
      rate: 3,
      disc: 'Lenovo ThinkPad sa 15,6 inch ekranom 12GB ram memorije i 256GB SSD ',
    },
    {
      id: 3,
      price: 1100,
      name: 'Lenovo 3500s',
      rate: 4,
      disc: 'Lenovo ThinkPad sa 15,6 inch ekranom 12GB ram memorije i 256GB SSD ',
    },
    {
      id: 4,
      price: 500,
      name: 'Lenovo 1100t',
      rate: 3,
      disc: 'Lenovo ThinkPad sa 15,6 inch ekranom 12GB ram memorije i 256GB SSD ',
    },
    {
      id: 5,
      price: 850,
      name: 'Lenovo 5500m',
      rate: 4,
      disc: 'Lenovo ThinkPad sa 15,6 inch ekranom 12GB ram memorije i 256GB SSD ',
    },
    {
      id: 6,
      price: 450,
      name: 'Lenovo 4520m',
      rate: 2,
      disc: 'Lenovo ThinkPad sa 15,6 inch ekranom 12GB ram memorije i 256GB SSD ',
    },
    {
      id: 7,
      price: 950,
      name: 'Lenovo 3550tt',
      rate: 5,
      disc: 'Lenovo ThinkPad sa 15,6 inch ekranom 12GB ram memorije i 256GB SSD ',
    },
    {
      id: 8,
      price: 1100,
      name: 'Lenovo 2800s',
      rate: 4,
      disc: 'Lenovo ThinkPad sa 15,6 inch ekranom 12GB ram memorije i 256GB SSD ',
    },
    {
      id: 9,
      price: 1150,
      name: 'Lenovo 4200r',
      rate: 4,
      disc: 'Lenovo ThinkPad sa 15,6 inch ekranom 12GB ram memorije i 256GB SSD ',
    },
  ];
  sendIndex() {
    return this.index;
  }
  setSearchText(text: string) {
    this.searchText.next(text);
  }
  getSearchText() {
    return this.searchText.asObservable();
  }
}

export interface Product {
  id: number;
  price: number;
  name: string;
  disc: string;
  rate: number;
}
export interface index {
  index: number;
}
