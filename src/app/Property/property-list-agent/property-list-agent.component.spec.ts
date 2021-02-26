import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListAgentComponent } from './property-list-agent.component';

describe('PropertyListAgentComponent', () => {
  let component: PropertyListAgentComponent;
  let fixture: ComponentFixture<PropertyListAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyListAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyListAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
