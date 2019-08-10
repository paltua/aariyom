import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFunctionalComponent } from './about-functional.component';

describe('AboutFunctionalComponent', () => {
  let component: AboutFunctionalComponent;
  let fixture: ComponentFixture<AboutFunctionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFunctionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFunctionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
