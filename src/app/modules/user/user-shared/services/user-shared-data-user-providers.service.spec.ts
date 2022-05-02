import { TestBed } from '@angular/core/testing';

import { UserSharedDataUserProvidersService } from './user-shared-data-user-providers.service';

describe('UserSharedDataUserProvidersService', () => {
  let service: UserSharedDataUserProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSharedDataUserProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
