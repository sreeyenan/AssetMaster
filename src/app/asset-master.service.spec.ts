import { TestBed } from '@angular/core/testing';

import { AssetMasterService } from './asset-master.service';

describe('AssetMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssetMasterService = TestBed.get(AssetMasterService);
    expect(service).toBeTruthy();
  });
});
