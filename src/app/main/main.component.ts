import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServices } from '../data.service';
import { Product } from '../data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  products: Product[] = this.dataServices.products;
  searchText$: Observable<string> = this.dataServices.getSearchText();
  constructor(private dataServices: DataServices) {}

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
