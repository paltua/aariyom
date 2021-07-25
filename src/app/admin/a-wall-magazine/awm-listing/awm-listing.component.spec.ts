import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwmListingComponent } from './awm-listing.component';

describe('AwmListingComponent', () => {
  let component: AwmListingComponent;
  let fixture: ComponentFixture<AwmListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwmListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwmListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
