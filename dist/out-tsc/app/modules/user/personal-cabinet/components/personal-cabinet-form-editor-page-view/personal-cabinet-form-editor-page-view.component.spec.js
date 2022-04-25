import { TestBed } from '@angular/core/testing';
import { PersonalCabinetFormEditorPageViewComponent } from './personal-cabinet-form-editor-page-view.component';
describe('PersonalCabinetFormEditorPageViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PersonalCabinetFormEditorPageViewComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(PersonalCabinetFormEditorPageViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=personal-cabinet-form-editor-page-view.component.spec.js.map