import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCabinetFormEditorComponent } from './personal-cabinet-form-editor.component';

describe('PersonalCabinetFormEditorComponent', () => {
    let component: PersonalCabinetFormEditorComponent;
    let fixture: ComponentFixture<PersonalCabinetFormEditorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PersonalCabinetFormEditorComponent ]
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
