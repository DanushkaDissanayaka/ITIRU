import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenterInformationComponent } from './presenter-information.component';

describe('PresenterInformationComponent', () => {
  let component: PresenterInformationComponent;
  let fixture: ComponentFixture<PresenterInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenterInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenterInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
