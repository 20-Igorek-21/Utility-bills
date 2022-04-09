import { TestBed } from '@angular/core/testing';
import { MainLayoutPageHeaderComponent } from './main-layout-page-header.component';
describe('MainLayoutPageHeaderComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MainLayoutPageHeaderComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(MainLayoutPageHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=main-layout-page-header.component.spec.js.map