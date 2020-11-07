import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.scss']
})
export class NoPageComponent {
  errorCode = '404';
  errorText = 'Страница не найдена (или находится в разработке)';
  constructor(private router: Router) {
  }
  public toHome(): void {
    this.router.navigate(['/home']);
  }
}
