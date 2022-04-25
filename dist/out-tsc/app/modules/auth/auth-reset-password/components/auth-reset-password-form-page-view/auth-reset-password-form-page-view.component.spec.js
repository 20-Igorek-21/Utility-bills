import { TestBed } from '@angular/core/testing';
import { AuthResetPasswordFormPageViewComponent } from './auth-reset-password-form-page-view.component';
describe('AuthResetPasswordFormPageViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthResetPasswordFormPageViewComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(AuthResetPasswordFormPageViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auth-reset-password-form-page-view.component.spec.js.map