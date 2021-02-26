import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyGComponent } from './property-g.component';

describe('PropertyGComponent', () => {
  let component: PropertyGComponent;
  let fixture: ComponentFixture<PropertyGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
