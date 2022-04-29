import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalCabinetFormEditorPageViewComponent } from './user-personal-cabinet-form-editor-page-view.component';

describe('UserPersonalCabinetFormEditorPageViewComponent', () => {
    let component: UserPersonalCabinetFormEditorPageViewComponent;
    let fixture: ComponentFixture<UserPersonalCabinetFormEditorPageViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserPersonalCabinetFormEditorPageViewComponent ]
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
