import { TestBed } from '@angular/core/testing';
import { UserIndicatorsSectionAccountsComponent } from './user-indicators-section-accounts.component';
describe('UserIndicatorsSectionAccountsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserIndicatorsSectionAccountsComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserIndicatorsSectionAccountsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-indicators-section-accounts.component.spec.js.map