import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NoPageComponent} from './no-page.component';
import {SharedModule} from '../../shared.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('NoPageComponent', () => {
  let component: NoPageComponent;
  let fixture: ComponentFixture<NoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoPageComponent],
      imports: [SharedModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
