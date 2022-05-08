import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSharedFormAddAccountComponent } from './user-shared-form-add-account.component';

describe('UserSharedFormAddAccountComponent', () => {
    let component: UserSharedFormAddAccountComponent;
    let fixture: ComponentFixture<UserSharedFormAddAccountComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserSharedFormAddAccountComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserSharedFormAddAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
