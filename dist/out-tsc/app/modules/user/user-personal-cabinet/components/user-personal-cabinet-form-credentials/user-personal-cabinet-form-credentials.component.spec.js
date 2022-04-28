import { TestBed } from '@angular/core/testing';
import { UserPersonalCabinetFormCredentialsComponent } from './user-personal-cabinet-form-credentials.component';
describe('UserPersonalCabinetFormCredentialsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserPersonalCabinetFormCredentialsComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserPersonalCabinetFormCredentialsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-personal-cabinet-form-credentials.component.spec.js.map