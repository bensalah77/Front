import { TestBed } from '@angular/core/testing';

import { PublicationserviceService } from './publicationservice.service';

describe('PublicationserviceService', () => {
  let service: PublicationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
