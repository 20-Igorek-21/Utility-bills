import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalCabinetFormPriveteDataComponent } from './user-personal-cabinet-form-privete-data.component';

describe('UserPersonalCabinetFormPriveteDataComponent', () => {
    let component: UserPersonalCabinetFormPriveteDataComponent;
    let fixture: ComponentFixture<UserPersonalCabinetFormPriveteDataComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserPersonalCabinetFormPriveteDataComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserPersonalCabinetFormPriveteDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
