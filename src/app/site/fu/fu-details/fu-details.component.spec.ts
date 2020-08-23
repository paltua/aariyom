import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuDetailsComponent } from './fu-details.component';

describe('FuDetailsComponent', () => {
  let component: FuDetailsComponent;
  let fixture: ComponentFixture<FuDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
