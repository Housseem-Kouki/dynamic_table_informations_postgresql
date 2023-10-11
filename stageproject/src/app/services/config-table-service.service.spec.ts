import { TestBed } from '@angular/core/testing';

import { ConfigTableServiceService } from './config-table-service.service';

describe('ConfigTableServiceService', () => {
  let service: ConfigTableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigTableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
