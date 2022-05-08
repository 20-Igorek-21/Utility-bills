import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalCabinetAccountComponent } from './user-personal-cabinet-account.component';

describe('UserPersonalCabinetAccountComponent', () => {
    let component: UserPersonalCabinetAccountComponent;
    let fixture: ComponentFixture<UserPersonalCabinetAccountComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserPersonalCabinetAccountComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserPersonalCabinetAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
