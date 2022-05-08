import { TestBed } from '@angular/core/testing';

import { BadgeeService } from './badgee.service';

describe('BadgeeService', () => {
  let service: BadgeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadgeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
