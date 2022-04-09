import { TestBed } from '@angular/core/testing';
import { AuthLoginFormPageViewComponent } from './auth-login-form-page-view.component';
describe('AuthLoginFormPageViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthLoginFormPageViewComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(AuthLoginFormPageViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auth-login-form-page-view.component.spec.js.map