import { TestBed } from '@angular/core/testing';

import { TableServieService } from './table-service.service';

describe('TableServieService', () => {
  let service: TableServieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableServieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
