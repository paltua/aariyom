import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTemplateHeaderComponent } from './site-template-header.component';

describe('SiteTemplateHeaderComponent', () => {
  let component: SiteTemplateHeaderComponent;
  let fixture: ComponentFixture<SiteTemplateHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteTemplateHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTemplateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
