import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProAddEditComponent } from './pro-add-edit.component';

describe('ProAddEditComponent', () => {
  let component: ProAddEditComponent;
  let fixture: ComponentFixture<ProAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
