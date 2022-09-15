import { TestBed } from '@angular/core/testing';

import { StoreLibService } from './store-lib.service';

describe('StoreLibService', () => {
  let service: StoreLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
