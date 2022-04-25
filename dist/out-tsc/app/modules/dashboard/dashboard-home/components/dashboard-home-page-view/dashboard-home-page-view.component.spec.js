import { TestBed } from '@angular/core/testing';
import { DashboardHomePageViewComponent } from './dashboard-home-page-view.component';
describe('DashboardHomePageViewComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DashboardHomePageViewComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardHomePageViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dashboard-home-page-view.component.spec.js.map