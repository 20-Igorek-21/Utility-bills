import { TestBed } from '@angular/core/testing';

import { UserSharedCreateAccountService } from './user-shared-create-account.service';

describe('UserSharedCreateAccountService', () => {
    let service: UserSharedCreateAccountService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserSharedCreateAccountService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
