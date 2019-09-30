import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abstract2Component } from './abstract2.component';

describe('Abstract2Component', () => {
  let component: Abstract2Component;
  let fixture: ComponentFixture<Abstract2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abstract2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abstract2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
