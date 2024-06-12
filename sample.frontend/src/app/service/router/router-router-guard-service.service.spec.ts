import { TestBed } from '@angular/core/testing';

import { RouterRouterGuardServiceService } from './router-router-guard-service.service';

describe('RouterRouterGuardServiceService', () => {
  let service: RouterRouterGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterRouterGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
