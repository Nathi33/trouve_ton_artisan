import { TestBed } from '@angular/core/testing';

import { DataCraftsmanService } from './data-craftsman.service';

describe('DataCraftsmanService', () => {
  let service: DataCraftsmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCraftsmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
