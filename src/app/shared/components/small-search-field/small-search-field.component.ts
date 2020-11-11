import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-small-search-field',
  templateUrl: './small-search-field.component.html',
  styleUrls: ['./small-search-field.component.scss']
})
export class SmallSearchFieldComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl('')
    });
  }

  submit(): void {
    console.log({...this.form.value});
    this.form.reset();
  }
}
