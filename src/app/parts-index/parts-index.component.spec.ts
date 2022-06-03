import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsIndexComponent } from './parts-index.component';

describe('PartsIndexComponent', () => {
  let component: PartsIndexComponent;
  let fixture: ComponentFixture<PartsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
