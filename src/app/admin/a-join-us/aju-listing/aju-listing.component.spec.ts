import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjuListingComponent } from './aju-listing.component';

describe('AjuListingComponent', () => {
  let component: AjuListingComponent;
  let fixture: ComponentFixture<AjuListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjuListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjuListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
