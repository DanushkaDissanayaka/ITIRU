import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationOrTravelComponent } from './accommodation-or-travel.component';

describe('AccommodationOrTravelComponent', () => {
  let component: AccommodationOrTravelComponent;
  let fixture: ComponentFixture<AccommodationOrTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationOrTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationOrTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
