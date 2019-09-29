import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CammeraReayPapersComponent } from './cammera-reay-papers.component';

describe('CammeraReayPapersComponent', () => {
  let component: CammeraReayPapersComponent;
  let fixture: ComponentFixture<CammeraReayPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CammeraReayPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CammeraReayPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
