import { TestBed } from '@angular/core/testing';

import { UserSharedChangeDataUserService } from './user-shared-change-data-user.service';

describe('UserSharedChangeDataUserService', () => {
    let service: UserSharedChangeDataUserService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserSharedChangeDataUserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
