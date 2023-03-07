import { Component } from '@angular/core';
import { Product } from '../data.service';
import { CartShoppingService } from '../cart-shopping.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  products: Product[] = this.cartShopping.shoppingCart;

  constructor(private cartShopping: CartShoppingService) {}
}
