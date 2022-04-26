import { TestBed } from '@angular/core/testing';
import { UserSharedCreateAccountService } from './user-shared-create-account.service';
describe('UserSharedCreateAccountService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserSharedCreateAccountService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user-shared-create-account.service.spec.js.map