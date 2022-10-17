import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCompo3Component } from './super-compo3.component';

describe('SuperCompo3Component', () => {
  let component: SuperCompo3Component;
  let fixture: ComponentFixture<SuperCompo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCompo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCompo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
