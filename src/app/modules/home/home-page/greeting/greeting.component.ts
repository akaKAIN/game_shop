import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-base',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  greetingTitle = 'Мы готовим для Вас только из натурального 100% мяса';
  greetingFooter = 'Попробуй раз и ты захочешь насладиться этим вкусом снова.';
  list: string[] = [
    'Без усилителей вкуса',
    'Без лишней соли',
    'Без сои'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
