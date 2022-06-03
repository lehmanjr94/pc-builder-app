import { TestBed } from '@angular/core/testing';

import { PartdataService } from './partdata.service';

describe('PartdataService', () => {
  let service: PartdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
