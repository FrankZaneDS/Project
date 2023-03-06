import { Component, EventEmitter, Output } from '@angular/core';
import { DataServices } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchText = '';

  // onClick() {
  //   console.log(this.searchText);
  // }
  constructor(private dataServices: DataServices) {}
  filterProducts() {
    this.dataServices.setSearchText(this.searchText);
    console.log(this.dataServices.searchText);
  }
}
