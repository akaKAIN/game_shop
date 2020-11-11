import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  form: FormGroup;

  search(): void {
    if (this.form.value.hasOwnProperty('search')) {
      const search: string = this.form.value.search;
      if (search !== null && search.trim() !== '') {
        console.log('TODO: queryParams fot product list');
        this.form.reset();
      }
    }
  }

  constructor(private product: ProductService) {
    this.form = new FormGroup({
      search: new FormControl('')
    });
  }
}
