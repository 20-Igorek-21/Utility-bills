import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthResetPasswordFormComponent } from './auth-reset-password-form.component';

describe('AuthResetPasswordFormComponent', () => {
    let component: AuthResetPasswordFormComponent;
    let fixture: ComponentFixture<AuthResetPasswordFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AuthResetPasswordFormComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthResetPasswordFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
