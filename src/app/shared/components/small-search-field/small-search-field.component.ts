import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-search-field',
  templateUrl: './small-search-field.component.html',
  styleUrls: ['./small-search-field.component.scss']
})
export class SmallSearchFieldComponent implements OnInit {
  submit(text: string): void {
    if (text.trim()){
      console.log(text);
    }
  }
  constructor() {}

  ngOnInit(): void {
  }

}
