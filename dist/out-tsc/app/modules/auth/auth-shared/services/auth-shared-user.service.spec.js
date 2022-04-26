import { TestBed } from '@angular/core/testing';
import { AuthSharedUserService } from './auth-shared-user.service';
describe('AuthSharedUserService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthSharedUserService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-shared-user.service.spec.js.map