import { TestBed } from '@angular/core/testing';
import { UserIndicatorsCardsComponent } from './user-indicators-cards.component';
describe('IndicatorsCardsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserIndicatorsCardsComponent]
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
//# sourceMappingURL=user-indicators-cards.component.spec.js.map