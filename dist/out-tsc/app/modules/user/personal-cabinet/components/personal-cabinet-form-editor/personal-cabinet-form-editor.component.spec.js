import { TestBed } from '@angular/core/testing';
import { PersonalCabinetFormEditorComponent } from './personal-cabinet-form-editor.component';
describe('PersonalCabinetFormEditorComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PersonalCabinetFormEditorComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(PersonalCabinetFormEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=personal-cabinet-form-editor.component.spec.js.map