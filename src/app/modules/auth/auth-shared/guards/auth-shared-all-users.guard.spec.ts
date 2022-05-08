import { TestBed } from '@angular/core/testing';

import { AuthSharedAllUsersGuard } from './auth-shared-all-users.guard';

describe('AuthSharedAllUsersGuard', () => {
    let guard: AuthSharedAllUsersGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(AuthSharedAllUsersGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
