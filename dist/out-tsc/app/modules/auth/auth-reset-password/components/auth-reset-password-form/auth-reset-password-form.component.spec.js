import { TestBed } from '@angular/core/testing';
import { AuthResetPasswordFormComponent } from './auth-reset-password-form.component';
describe('AuthResetPasswordFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthResetPasswordFormComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(AuthResetPasswordFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auth-reset-password-form.component.spec.js.map