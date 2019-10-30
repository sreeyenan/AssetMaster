import { TestBed } from '@angular/core/testing';

import { PurchaseDetService } from './purchase-det.service';

describe('PurchaseDetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseDetService = TestBed.get(PurchaseDetService);
    expect(service).toBeTruthy();
  });
});
