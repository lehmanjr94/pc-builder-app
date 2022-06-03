import { TestBed } from '@angular/core/testing';

import { GameSelectionDataService } from './game-selection-data.service';

describe('GameSelectionDataService', () => {
  let service: GameSelectionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameSelectionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
