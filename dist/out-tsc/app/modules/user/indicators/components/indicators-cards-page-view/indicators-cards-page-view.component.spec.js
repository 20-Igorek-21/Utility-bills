import { TestBed } from '@angular/core/testing';
import { IndicatorsCardsPageViewComponent } from './indicators-cards-page-view.component';
describe('IndicatorsCardsPageViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IndicatorsCardsPageViewComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(IndicatorsCardsPageViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=indicators-cards-page-view.component.spec.js.map