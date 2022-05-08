import { TestBed } from '@angular/core/testing';
import { UserSharedDataUserAccountService } from './user-shared-data-user-account.service';
describe('UserSharedDataUserAccountService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserSharedDataUserAccountService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user-shared-data-user-account.service.spec.js.map