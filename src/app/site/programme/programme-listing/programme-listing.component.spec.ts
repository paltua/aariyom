import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeListingComponent } from './programme-listing.component';

describe('ProgrammeListingComponent', () => {
  let component: ProgrammeListingComponent;
  let fixture: ComponentFixture<ProgrammeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
