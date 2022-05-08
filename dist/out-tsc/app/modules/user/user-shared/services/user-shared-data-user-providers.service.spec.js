import { TestBed } from '@angular/core/testing';
import { UserSharedDataUserProvidersService } from './user-shared-data-user-providers.service';
describe('UserSharedDataUserProvidersService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserSharedDataUserProvidersService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user-shared-data-user-providers.service.spec.js.map