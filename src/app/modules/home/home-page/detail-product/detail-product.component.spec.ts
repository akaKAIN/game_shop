import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailProductComponent} from './detail-product.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../../shared/shared.module';

describe('DetailProductComponent', () => {
  let component: DetailProductComponent;
  let fixture: ComponentFixture<DetailProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailProductComponent],
      imports: [SharedModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
