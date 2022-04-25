import { TestBed } from '@angular/core/testing';
import { PersonalCabinetCardComponent } from './personal-cabinet-card.component';
describe('PersonalCabinetCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PersonalCabinetCardComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(PersonalCabinetCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=personal-cabinet-card.component.spec.js.map