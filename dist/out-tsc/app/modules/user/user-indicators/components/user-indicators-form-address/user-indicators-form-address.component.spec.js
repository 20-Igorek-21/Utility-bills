import { TestBed } from '@angular/core/testing';
import { UserIndicatorsFormAddressComponent } from './user-indicators-form-address.component';
describe('UserIndicatorsFormAddressComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserIndicatorsFormAddressComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserIndicatorsFormAddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-indicators-form-address.component.spec.js.map