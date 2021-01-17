import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersProgrammeComponent } from './others-programme.component';

describe('OthersProgrammeComponent', () => {
  let component: OthersProgrammeComponent;
  let fixture: ComponentFixture<OthersProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersProgrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
