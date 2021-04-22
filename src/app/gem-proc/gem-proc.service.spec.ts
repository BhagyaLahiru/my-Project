import { TestBed } from '@angular/core/testing';

import { GemProcService } from './gem-proc.service';

describe('GemProcService', () => {
  let service: GemProcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GemProcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
