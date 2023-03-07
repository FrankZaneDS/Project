import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartShoppingService {
  shoppingCart: any[] = [];
  constructor() {}
}
export interface Product {
  id: number;
  price: number;
  name: string;
  disc: string;
  rate: number;
}
