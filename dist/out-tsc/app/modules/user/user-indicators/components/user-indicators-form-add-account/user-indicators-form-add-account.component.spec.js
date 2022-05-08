import { TestBed } from '@angular/core/testing';
import { UserIndicatorsFormAddAccountComponent } from './user-indicators-form-add-account.component';
describe('UserIndicatorsFormAddAccountComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserIndicatorsFormAddAccountComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserIndicatorsFormAddAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-indicators-form-add-account.component.spec.js.map