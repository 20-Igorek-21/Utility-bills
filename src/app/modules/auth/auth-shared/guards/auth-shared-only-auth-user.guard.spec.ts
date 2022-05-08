import { TestBed } from '@angular/core/testing';

import { AuthSharedOnlyAuthUserGuard } from './auth-shared-only-auth-user.guard';

describe('AuthSharedOnlyAuthUserGuard', () => {
    let guard: AuthSharedOnlyAuthUserGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(AuthSharedOnlyAuthUserGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
