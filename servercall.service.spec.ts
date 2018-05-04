import { TestBed, inject } from '@angular/core/testing';

import { ServercallService } from './servercall.service';

describe('ServercallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServercallService]
    });
  });

  it('should be created', inject([ServercallService], (service: ServercallService) => {
    expect(service).toBeTruthy();
  }));
});
