import { TestBed } from '@angular/core/testing';

import { JoinUsService } from './join-us.service';

describe('JoinUsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoinUsService = TestBed.get(JoinUsService);
    expect(service).toBeTruthy();
  });
});
