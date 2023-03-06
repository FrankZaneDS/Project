import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { Product } from './data.service';

@Pipe({
  name: 'search',
  pure: false,
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], searchText: string | null) {
    if (products.length === 0 || searchText === '' || searchText === null) {
      return products;
    }

    return products.filter((product) => product.name.includes(searchText));
  }
}
