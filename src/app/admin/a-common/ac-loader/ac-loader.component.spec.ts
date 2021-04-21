import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcLoaderComponent } from './ac-loader.component';

describe('AcLoaderComponent', () => {
  let component: AcLoaderComponent;
  let fixture: ComponentFixture<AcLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
