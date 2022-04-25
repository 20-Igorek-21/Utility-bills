import { TestBed } from '@angular/core/testing';
import { IndicatorsCardsPageComponent } from './indicators-cards-page.component';
describe('IndicatorsCardsPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IndicatorsCardsPageComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(IndicatorsCardsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=indicators-cards-page.component.spec.js.map