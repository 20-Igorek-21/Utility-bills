import { TestBed } from '@angular/core/testing';
import { UserProfileFormPageComponent } from './user-profile-form-page.component';
describe('UserProfileFormPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserProfileFormPageComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserProfileFormPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-profile-form-page.component.spec.js.map