import { TestBed } from '@angular/core/testing';

import { UnauthOnlyGuard } from './unauth-only.guard';

describe('UnauthOnlyGuard', () => {
    let guard: UnauthOnlyGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(UnauthOnlyGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
