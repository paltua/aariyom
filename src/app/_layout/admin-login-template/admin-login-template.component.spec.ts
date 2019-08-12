import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginTemplateComponent } from './admin-login-template.component';

describe('AdminLoginTemplateComponent', () => {
  let component: AdminLoginTemplateComponent;
  let fixture: ComponentFixture<AdminLoginTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoginTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
