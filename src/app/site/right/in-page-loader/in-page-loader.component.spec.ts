import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPageLoaderComponent } from './in-page-loader.component';

describe('InPageLoaderComponent', () => {
  let component: InPageLoaderComponent;
  let fixture: ComponentFixture<InPageLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPageLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
