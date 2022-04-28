import { TestBed } from '@angular/core/testing';
import { UserSharedDataUserService } from './user-shared-data-user.service';
describe('UserSharedDataUserService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserSharedDataUserService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user-shared-data-user.service.spec.js.map