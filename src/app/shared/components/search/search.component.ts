import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  form: FormGroup;

  search(): void {
    const search: string = this.form.value.search;
    if (search !== null && search.trim() !== '' ) {
      console.log(...this.form.value);
      this.form.reset();
    }
  }

  constructor() {
    this.form = new FormGroup({
      search: new FormControl('')
    });
  }
}
