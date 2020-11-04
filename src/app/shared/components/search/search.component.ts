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
    console.log(...this.form.value);
  }
  constructor() {
    this.form = new FormGroup({
      search: new FormControl('')
    });
  }
}
