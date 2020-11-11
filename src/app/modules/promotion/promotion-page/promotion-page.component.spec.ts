import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PromotionPageComponent} from './promotion-page.component';
import {SharedModule} from '../../../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('PromotionPageComponent', () => {
  let component: PromotionPageComponent;
  let fixture: ComponentFixture<PromotionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromotionPageComponent],
      imports: [SharedModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
