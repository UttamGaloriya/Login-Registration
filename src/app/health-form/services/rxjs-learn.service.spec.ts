import { TestBed } from '@angular/core/testing';

import { RxjsLearnService } from './rxjs-learn.service';

describe('RxjsLearnService', () => {
  let service: RxjsLearnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsLearnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
