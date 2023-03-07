import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServices } from '../data.service';
import { Product } from '../data.service';
import { CartShoppingService } from '../cart-shopping.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  products: Product[] = this.dataServices.products;
  product: Product[] = [];
  searchText$: Observable<string> = this.dataServices.getSearchText();
  constructor(
    private dataServices: DataServices,
    private cartShopping: CartShoppingService
  ) {}

  onAddToCart(index: number) {
    this.cartShopping.shoppingCart.push(this.products[index]);
    console.log(this.cartShopping);
  }

  onSelectedProduct(i: number) {
    console.log(i);
    this.dataServices.index = i;
  }
  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   setInterval(() => {
  //     console.log(this.searchText);
  //   }, 5000);
  // }
}
