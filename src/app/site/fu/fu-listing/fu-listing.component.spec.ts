import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuListingComponent } from './fu-listing.component';

describe('FuListingComponent', () => {
  let component: FuListingComponent;
  let fixture: ComponentFixture<FuListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
