import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalCabinetFormEditorPageComponent } from './user-personal-cabinet-form-editor-page.component';

describe('UserPersonalCabinetFormEditorPageComponent', () => {
    let component: UserPersonalCabinetFormEditorPageComponent;
    let fixture: ComponentFixture<UserPersonalCabinetFormEditorPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserPersonalCabinetFormEditorPageComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserPersonalCabinetFormEditorPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
