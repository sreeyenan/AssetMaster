import { TestBed } from '@angular/core/testing';

import { AssetDetService } from './asset-det.service';

describe('AssetDetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssetDetService = TestBed.get(AssetDetService);
    expect(service).toBeTruthy();
  });
});
