import { TestBed } from '@angular/core/testing';
import { UserPersonalCabinetCardComponent } from './user-personal-cabinet-card.component';
describe('UserPersonalCabinetCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserPersonalCabinetCardComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserPersonalCabinetCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-personal-cabinet-card.component.spec.js.map