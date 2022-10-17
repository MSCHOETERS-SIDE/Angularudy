import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCompoComponent } from './super-compo.component';

describe('SuperCompoComponent', () => {
  let component: SuperCompoComponent;
  let fixture: ComponentFixture<SuperCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
