import { TestBed } from '@angular/core/testing';
import { AuthLoginFormPageComponent } from './auth-login-form-page.component';
describe('AuthLoginFormPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthLoginFormPageComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(AuthLoginFormPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auth-login-form-page.component.spec.js.map