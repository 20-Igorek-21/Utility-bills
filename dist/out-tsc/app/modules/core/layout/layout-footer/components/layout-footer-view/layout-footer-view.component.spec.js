import { TestBed } from '@angular/core/testing';
import { LayoutFooterViewComponent } from './layout-footer-view.component';
describe('LayoutFooterViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LayoutFooterViewComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutFooterViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=layout-footer-view.component.spec.js.map