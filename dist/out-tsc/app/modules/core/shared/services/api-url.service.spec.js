import { TestBed } from '@angular/core/testing';
import { ApiUrlService } from './api-url.service';
describe('ApiUrlService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ApiUrlService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=api-url.service.spec.js.map