import { TestBed } from '@angular/core/testing';
import { UserPersonalCabinetFormEditorComponent } from './user-personal-cabinet-form-editor.component';
describe('UserPersonalCabinetFormEditorComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserPersonalCabinetFormEditorComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserPersonalCabinetFormEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-personal-cabinet-form-editor.component.spec.js.map