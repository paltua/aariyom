import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjuReplyComponent } from './aju-reply.component';

describe('AjuReplyComponent', () => {
  let component: AjuReplyComponent;
  let fixture: ComponentFixture<AjuReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjuReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjuReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
