import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSharedFormPersonalDataComponent } from './user-shared-form-personal-data.component';

describe('UserSharedFormPersonalDataComponent', () => {
    let component: UserSharedFormPersonalDataComponent;
    let fixture: ComponentFixture<UserSharedFormPersonalDataComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserSharedFormPersonalDataComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserSharedFormPersonalDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
