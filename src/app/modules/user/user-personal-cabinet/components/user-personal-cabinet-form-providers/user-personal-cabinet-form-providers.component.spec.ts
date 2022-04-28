import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalCabinetFormProvidersComponent } from './user-personal-cabinet-form-providers.component';

describe('UserPersonalCabinetFormProvidersComponent', () => {
    let component: UserPersonalCabinetFormProvidersComponent;
    let fixture: ComponentFixture<UserPersonalCabinetFormProvidersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserPersonalCabinetFormProvidersComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserPersonalCabinetFormProvidersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
