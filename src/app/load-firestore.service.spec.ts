import { TestBed } from '@angular/core/testing';

import { LoadFirestoreService } from './load-firestore.service';

describe('LoadFirestoreService', () => {
  let service: LoadFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
