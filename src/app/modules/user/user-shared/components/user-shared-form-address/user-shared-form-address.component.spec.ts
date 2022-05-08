import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSharedFormAddressComponent } from './user-shared-form-address.component';

describe('UserSharedFormAddressComponent', () => {
    let component: UserSharedFormAddressComponent;
    let fixture: ComponentFixture<UserSharedFormAddressComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserSharedFormAddressComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserSharedFormAddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
