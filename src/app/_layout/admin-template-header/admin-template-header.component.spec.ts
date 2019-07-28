import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTemplateHeaderComponent } from './admin-template-header.component';

describe('AdminTemplateHeaderComponent', () => {
  let component: AdminTemplateHeaderComponent;
  let fixture: ComponentFixture<AdminTemplateHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTemplateHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTemplateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
