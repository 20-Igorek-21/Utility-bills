import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndicatorsCurrentAccountComponent } from './user-indicators-current-account.component';

describe('UserIndicatorsCurrentAccountComponent', () => {
    let component: UserIndicatorsCurrentAccountComponent;
    let fixture: ComponentFixture<UserIndicatorsCurrentAccountComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserIndicatorsCurrentAccountComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserIndicatorsCurrentAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
