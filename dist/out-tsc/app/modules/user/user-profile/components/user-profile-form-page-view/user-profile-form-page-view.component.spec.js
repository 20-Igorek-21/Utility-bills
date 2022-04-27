import { TestBed } from '@angular/core/testing';
import { UserProfileFormPageViewComponent } from './user-profile-form-page-view.component';
describe('UserProfileFormPageViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserProfileFormPageViewComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserProfileFormPageViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-profile-form-page-view.component.spec.js.map