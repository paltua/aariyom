import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwmAddEditComponent } from './awm-add-edit.component';

describe('AwmAddEditComponent', () => {
  let component: AwmAddEditComponent;
  let fixture: ComponentFixture<AwmAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwmAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwmAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
