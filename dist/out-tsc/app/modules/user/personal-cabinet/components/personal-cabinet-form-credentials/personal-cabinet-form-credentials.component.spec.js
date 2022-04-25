import { TestBed } from '@angular/core/testing';
import { PersonalCabinetFormCredentialsComponent } from './personal-cabinet-form-credentials.component';
describe('PersonalCabinetFormCredentialsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PersonalCabinetFormCredentialsComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(PersonalCabinetFormCredentialsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=personal-cabinet-form-credentials.component.spec.js.map