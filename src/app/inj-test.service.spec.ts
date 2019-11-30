import { TestBed } from '@angular/core/testing';

import { InjTestService } from './inj-test.service';

describe('InjTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InjTestService = TestBed.get(InjTestService);
    expect(service).toBeTruthy();
  });
});
