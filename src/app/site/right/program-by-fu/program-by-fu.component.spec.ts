import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramByFuComponent } from './program-by-fu.component';

describe('ProgramByFuComponent', () => {
  let component: ProgramByFuComponent;
  let fixture: ComponentFixture<ProgramByFuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramByFuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramByFuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
