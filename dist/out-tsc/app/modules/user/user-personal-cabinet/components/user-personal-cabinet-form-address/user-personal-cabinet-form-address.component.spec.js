import { TestBed } from '@angular/core/testing';
import { UserPersonalCabinetFormAddressComponent } from './user-personal-cabinet-form-address.component';
describe('UserPersonalCabinetFormAddressComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserPersonalCabinetFormAddressComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserPersonalCabinetFormAddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-personal-cabinet-form-address.component.spec.js.map