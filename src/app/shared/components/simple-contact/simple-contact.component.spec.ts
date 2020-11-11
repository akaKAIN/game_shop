import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SimpleContactComponent} from './simple-contact.component';
import {SharedModule} from '../../shared.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('SimpleContactComponent', () => {
  let component: SimpleContactComponent;
  let fixture: ComponentFixture<SimpleContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleContactComponent],
      imports: [SharedModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
