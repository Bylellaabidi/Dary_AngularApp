import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySubmitComponent } from './property-submit.component';

describe('PropertySubmitComponent', () => {
  let component: PropertySubmitComponent;
  let fixture: ComponentFixture<PropertySubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
