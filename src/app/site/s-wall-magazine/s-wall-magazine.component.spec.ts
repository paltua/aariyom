import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SWallMagazineComponent } from './s-wall-magazine.component';

describe('SWallMagazineComponent', () => {
  let component: SWallMagazineComponent;
  let fixture: ComponentFixture<SWallMagazineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SWallMagazineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SWallMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
