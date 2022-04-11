import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginFormPageComponent } from './auth-login-form-page.component';

describe('AuthLoginFormPageComponent', () => {
    let component: AuthLoginFormPageComponent;
    let fixture: ComponentFixture<AuthLoginFormPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AuthLoginFormPageComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthLoginFormPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
