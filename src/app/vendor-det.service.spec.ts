import { TestBed } from '@angular/core/testing';

import { VendorDetService } from './vendor-det.service';

describe('VendorDetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorDetService = TestBed.get(VendorDetService);
    expect(service).toBeTruthy();
  });
});
