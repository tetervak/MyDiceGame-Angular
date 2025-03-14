import { TestBed } from '@angular/core/testing';

import { RollHistoryService } from './roll-history.service';

describe('RollHistoryService', () => {
  let service: RollHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RollHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
