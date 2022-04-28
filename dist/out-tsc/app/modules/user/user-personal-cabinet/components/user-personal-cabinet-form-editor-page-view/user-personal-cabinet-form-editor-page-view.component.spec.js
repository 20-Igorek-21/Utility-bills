import { TestBed } from '@angular/core/testing';
import { UserPersonalCabinetFormEditorPageViewComponent } from './user-personal-cabinet-form-editor-page-view.component';
describe('UserPersonalCabinetFormEditorPageViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserPersonalCabinetFormEditorPageViewComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserPersonalCabinetFormEditorPageViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-personal-cabinet-form-editor-page-view.component.spec.js.map