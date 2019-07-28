import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTemplateFooterComponent } from './site-template-footer.component';

describe('SiteTemplateFooterComponent', () => {
  let component: SiteTemplateFooterComponent;
  let fixture: ComponentFixture<SiteTemplateFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteTemplateFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTemplateFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
