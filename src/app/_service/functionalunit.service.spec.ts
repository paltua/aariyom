import { TestBed } from '@angular/core/testing';

import { FunctionalunitService } from './functionalunit.service';

describe('FunctionalunitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunctionalunitService = TestBed.get(FunctionalunitService);
    expect(service).toBeTruthy();
  });
});
