import { TestBed } from '@angular/core/testing';
import { PersonalCabinetService } from './personal-cabinet.service';
describe('PersonalCabinetService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PersonalCabinetService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=personal-cabinet.service.spec.js.map