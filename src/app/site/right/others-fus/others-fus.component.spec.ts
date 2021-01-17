import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersFusComponent } from './others-fus.component';

describe('OthersFusComponent', () => {
  let component: OthersFusComponent;
  let fixture: ComponentFixture<OthersFusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersFusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersFusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
