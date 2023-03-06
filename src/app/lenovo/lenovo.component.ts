import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServices, Product } from '../data.service';

@Component({
  selector: 'app-lenovo',
  templateUrl: './lenovo.component.html',
  styleUrls: ['./lenovo.component.css'],
})
export class LenovoComponent implements OnInit {
  products: Product[] = this.dataServices.products;
  index = 0;
  constructor(
    private dataServices: DataServices,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.index = this.dataServices.index;
    this.index = +this.activatedRoute.snapshot.params['id'];
  }
}
