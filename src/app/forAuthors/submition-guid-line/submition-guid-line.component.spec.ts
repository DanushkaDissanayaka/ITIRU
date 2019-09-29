import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitionGuidLineComponent } from './submition-guid-line.component';

describe('SubmitionGuidLineComponent', () => {
  let component: SubmitionGuidLineComponent;
  let fixture: ComponentFixture<SubmitionGuidLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitionGuidLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitionGuidLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
