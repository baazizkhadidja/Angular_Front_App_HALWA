import { TestBed } from '@angular/core/testing';

import { HalwaService } from './halwa.service';

describe('HalwaService', () => {
  let service: HalwaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HalwaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
