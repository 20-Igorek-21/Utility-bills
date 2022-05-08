import { TestBed } from '@angular/core/testing';
import { UserIndicatorsCardsPageViewComponent } from './user-indicators-cards-page-view.component';
describe('IndicatorsCardsPageViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserIndicatorsCardsPageViewComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserIndicatorsCardsPageViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-indicators-cards-page-view.component.spec.js.map