import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDeleteComponent } from './pro-delete.component';

describe('ProDeleteComponent', () => {
  let component: ProDeleteComponent;
  let fixture: ComponentFixture<ProDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
