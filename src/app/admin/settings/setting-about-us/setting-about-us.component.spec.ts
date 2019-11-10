import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingAboutUsComponent } from './setting-about-us.component';

describe('SettingAboutUsComponent', () => {
  let component: SettingAboutUsComponent;
  let fixture: ComponentFixture<SettingAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
