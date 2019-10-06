import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop1Component } from './workshop1.component';

describe('Workshop1Component', () => {
  let component: Workshop1Component;
  let fixture: ComponentFixture<Workshop1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Workshop1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Workshop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
