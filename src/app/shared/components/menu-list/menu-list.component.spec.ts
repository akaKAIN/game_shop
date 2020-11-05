import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuListComponent} from './menu-list.component';
import {SharedModule} from '../../shared.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('MenuListComponent', () => {
  let component: MenuListComponent;
  let fixture: ComponentFixture<MenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuListComponent],
      imports: [SharedModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
