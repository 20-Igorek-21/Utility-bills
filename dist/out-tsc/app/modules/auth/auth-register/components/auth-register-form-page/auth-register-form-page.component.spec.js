import { TestBed } from '@angular/core/testing';
import { AuthRegisterFormPageComponent } from './auth-register-form-page.component';
describe('AuthRegisterFormPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthRegisterFormPageComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(AuthRegisterFormPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auth-register-form-page.component.spec.js.map