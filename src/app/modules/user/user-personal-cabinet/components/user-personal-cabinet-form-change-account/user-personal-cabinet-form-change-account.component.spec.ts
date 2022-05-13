import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalCabinetFormChangeAccountComponent } from './user-personal-cabinet-form-change-account.component';

describe('UserPersonalCabinetFormChangeAccountComponent', () => {
    let component: UserPersonalCabinetFormChangeAccountComponent;
    let fixture: ComponentFixture<UserPersonalCabinetFormChangeAccountComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserPersonalCabinetFormChangeAccountComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserPersonalCabinetFormChangeAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
