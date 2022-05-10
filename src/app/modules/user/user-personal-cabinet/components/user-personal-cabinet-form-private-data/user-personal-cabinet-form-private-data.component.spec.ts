import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalCabinetFormPrivateDataComponent } from './user-personal-cabinet-form-private-data.component';

describe('UserPersonalCabinetFormPrivateDataComponent', () => {
    let component: UserPersonalCabinetFormPrivateDataComponent;
    let fixture: ComponentFixture<UserPersonalCabinetFormPrivateDataComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserPersonalCabinetFormPrivateDataComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserPersonalCabinetFormPrivateDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
