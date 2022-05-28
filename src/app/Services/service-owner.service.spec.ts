import { TestBed } from '@angular/core/testing';

import { ServiceOwnerService } from './service-owner.service';

describe('ServiceOwnerService', () => {
  let service: ServiceOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
