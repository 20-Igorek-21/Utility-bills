import { TestBed } from '@angular/core/testing';

import { UserSharedFetchAccountService } from './user-shared-fetch-account.service';

describe('UserSharedFetchAccountService', () => {
    let service: UserSharedFetchAccountService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserSharedFetchAccountService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
