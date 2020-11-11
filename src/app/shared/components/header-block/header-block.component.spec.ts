import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderBlockComponent} from './header-block.component';
import {SharedModule} from '../../shared.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderBlockComponent', () => {
  let component: HeaderBlockComponent;
  let fixture: ComponentFixture<HeaderBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderBlockComponent],
      imports: [SharedModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
