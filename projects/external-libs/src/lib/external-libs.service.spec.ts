import { TestBed } from '@angular/core/testing';

import { ExternalLibsService } from './external-libs.service';

describe('ExternalLibsService', () => {
  let service: ExternalLibsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalLibsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
