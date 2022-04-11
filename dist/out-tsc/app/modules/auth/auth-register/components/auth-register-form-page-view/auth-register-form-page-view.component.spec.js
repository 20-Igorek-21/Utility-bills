import { TestBed } from '@angular/core/testing';
import { AuthRegisterFormPageViewComponent } from './auth-register-form-page-view.component';
describe('AuthRegisterFormPageViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthRegisterFormPageViewComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(AuthRegisterFormPageViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auth-register-form-page-view.component.spec.js.map