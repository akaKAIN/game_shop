import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalaroidImageComponent } from './palaroid-image.component';

describe('PalaroidImageComponent', () => {
  let component: PalaroidImageComponent;
  let fixture: ComponentFixture<PalaroidImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalaroidImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalaroidImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
