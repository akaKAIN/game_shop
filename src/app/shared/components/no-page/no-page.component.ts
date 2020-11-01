import {Component} from '@angular/core';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.scss']
})
export class NoPageComponent {
  errorCode = '404';
  errorText = 'Страница не найдена (или находится в разработке)';
}
