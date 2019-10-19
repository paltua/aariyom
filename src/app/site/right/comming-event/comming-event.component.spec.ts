import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommingEventComponent } from './comming-event.component';

describe('CommingEventComponent', () => {
  let component: CommingEventComponent;
  let fixture: ComponentFixture<CommingEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommingEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
