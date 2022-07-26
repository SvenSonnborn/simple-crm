import { TestBed } from '@angular/core/testing';

import { SelectedDepoService } from './selected-depo.service';

describe('SelectedDepoService', () => {
  let service: SelectedDepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedDepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
