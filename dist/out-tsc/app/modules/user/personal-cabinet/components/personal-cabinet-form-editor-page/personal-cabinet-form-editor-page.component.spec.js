import { TestBed } from '@angular/core/testing';
import { PersonalCabinetFormEditorPageComponent } from './personal-cabinet-form-editor-page.component';
describe('PersonalCabinetFormEditorPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PersonalCabinetFormEditorPageComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(PersonalCabinetFormEditorPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=personal-cabinet-form-editor-page.component.spec.js.map