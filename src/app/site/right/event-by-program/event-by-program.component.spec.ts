import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventByProgramComponent } from './event-by-program.component';

describe('EventByProgramComponent', () => {
  let component: EventByProgramComponent;
  let fixture: ComponentFixture<EventByProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventByProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventByProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
