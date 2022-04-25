import { TestBed } from '@angular/core/testing';
import { PersonalCabinetFormAddressComponent } from './personal-cabinet-form-address.component';
describe('PersonalCabinetFormAddressComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PersonalCabinetFormAddressComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(PersonalCabinetFormAddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=personal-cabinet-form-address.component.spec.js.map