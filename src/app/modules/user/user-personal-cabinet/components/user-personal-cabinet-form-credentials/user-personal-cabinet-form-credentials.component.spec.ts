import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalCabinetFormCredentialsComponent } from './user-personal-cabinet-form-credentials.component';

describe('UserPersonalCabinetFormCredentialsComponent', () => {
    let component: UserPersonalCabinetFormCredentialsComponent;
    let fixture: ComponentFixture<UserPersonalCabinetFormCredentialsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserPersonalCabinetFormCredentialsComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserPersonalCabinetFormCredentialsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
