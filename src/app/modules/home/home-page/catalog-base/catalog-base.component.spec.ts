import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogBaseComponent } from './catalog-base.component';

describe('CatalogBaseComponent', () => {
  let component: CatalogBaseComponent;
  let fixture: ComponentFixture<CatalogBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
