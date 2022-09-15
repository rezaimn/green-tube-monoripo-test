import { TestBed } from '@angular/core/testing';

import { SharedUiLibService } from './shared-ui-lib.service';

describe('SharedUiLibService', () => {
  let service: SharedUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
