import { TestBed } from '@angular/core/testing';
import { UserIndicatorsCardsPageComponent } from './user-indicators-cards-page.component';
describe('IndicatorsCardsPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserIndicatorsCardsPageComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserIndicatorsCardsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-indicators-cards-page.component.spec.js.map