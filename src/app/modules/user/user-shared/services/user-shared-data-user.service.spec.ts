import { TestBed } from '@angular/core/testing';

import { UserSharedDataUserService } from './user-shared-data-user.service';

describe('UserSharedDataUserService', () => {
    let service: UserSharedDataUserService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserSharedDataUserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
