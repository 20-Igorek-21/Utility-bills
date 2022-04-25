import { TestBed } from '@angular/core/testing';
import { AuthResetPasswordFormPageComponent } from './auth-reset-password-form-page.component';
describe('AuthResetPasswordFormPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthResetPasswordFormPageComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(AuthResetPasswordFormPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auth-reset-password-form-page.component.spec.js.map