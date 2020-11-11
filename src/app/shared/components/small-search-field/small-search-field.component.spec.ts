import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SmallSearchFieldComponent} from './small-search-field.component';
import {SharedModule} from '../../shared.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('SmallSearchFieldComponent', () => {
  let component: SmallSearchFieldComponent;
  let fixture: ComponentFixture<SmallSearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallSearchFieldComponent],
      imports: [SharedModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
