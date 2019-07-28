import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTemplateFooterComponent } from './admin-template-footer.component';

describe('AdminTemplateFooterComponent', () => {
  let component: AdminTemplateFooterComponent;
  let fixture: ComponentFixture<AdminTemplateFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTemplateFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTemplateFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
