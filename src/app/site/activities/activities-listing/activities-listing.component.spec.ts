import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesListingComponent } from './activities-listing.component';

describe('ActivitiesListingComponent', () => {
  let component: ActivitiesListingComponent;
  let fixture: ComponentFixture<ActivitiesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
