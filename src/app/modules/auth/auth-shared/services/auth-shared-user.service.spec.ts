import { TestBed } from '@angular/core/testing';

import { AuthSharedUserService } from './auth-shared-user.service';

describe('AuthSharedUserService', () => {
    let service: AuthSharedUserService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthSharedUserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
