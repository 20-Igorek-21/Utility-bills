import { TestBed } from '@angular/core/testing';
import { UserSharedFetchAccountService } from './user-shared-fetch-account.service';
describe('UserSharedFetchAccountService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserSharedFetchAccountService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user-shared-fetch-account.service.spec.js.map