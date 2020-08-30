import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProImageComponent } from './pro-image.component';

describe('ProImageComponent', () => {
  let component: ProImageComponent;
  let fixture: ComponentFixture<ProImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
