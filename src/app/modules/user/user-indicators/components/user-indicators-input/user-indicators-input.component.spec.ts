import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndicatorsCardsComponent } from './user-indicators-input.component';

describe('IndicatorsCardsComponent', () => {
    let component: UserIndicatorsCardsComponent;
    let fixture: ComponentFixture<UserIndicatorsCardsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserIndicatorsCardsComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserIndicatorsCardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
