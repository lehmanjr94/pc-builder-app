import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinRequirementsComponent } from './min-requirements.component';

describe('MinRequirementsComponent', () => {
  let component: MinRequirementsComponent;
  let fixture: ComponentFixture<MinRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
