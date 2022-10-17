import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCompo2Component } from './super-compo2.component';

describe('SuperCompo2Component', () => {
  let component: SuperCompo2Component;
  let fixture: ComponentFixture<SuperCompo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCompo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCompo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
