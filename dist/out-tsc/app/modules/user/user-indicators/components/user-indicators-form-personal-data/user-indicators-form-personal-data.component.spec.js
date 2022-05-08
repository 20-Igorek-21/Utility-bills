import { TestBed } from '@angular/core/testing';
import { UserIndicatorsFormPersonalDataComponent } from './user-indicators-form-personal-data.component';
describe('UserIndicatorsFormPersonalDataComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserIndicatorsFormPersonalDataComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserIndicatorsFormPersonalDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-indicators-form-personal-data.component.spec.js.map