import { TestBed } from '@angular/core/testing';

import { ServicepartnerService } from './servicepartner.service';

describe('ServicepartnerService', () => {
  let service: ServicepartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepartnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
