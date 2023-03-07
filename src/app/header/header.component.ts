import { Component, EventEmitter, Output } from '@angular/core';
import { DataServices, Product } from '../data.service';
import { CartShoppingService } from '../cart-shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchText = '';
  products: Product[] = this.shoppingChart.shoppingCart;
  // onClick() {
  //   console.log(this.searchText);
  // }
  constructor(
    private dataServices: DataServices,
    private shoppingChart: CartShoppingService
  ) {}
  filterProducts() {
    this.dataServices.setSearchText(this.searchText);
    console.log(this.dataServices.searchText);
  }
}
