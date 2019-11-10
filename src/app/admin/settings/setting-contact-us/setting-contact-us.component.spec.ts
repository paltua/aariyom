import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingContactUsComponent } from './setting-contact-us.component';

describe('SettingContactUsComponent', () => {
  let component: SettingContactUsComponent;
  let fixture: ComponentFixture<SettingContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
