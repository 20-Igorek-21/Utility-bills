import { TestBed } from '@angular/core/testing';
import { UserPersonalCabinetFormProvidersComponent } from './user-personal-cabinet-form-providers.component';
describe('UserPersonalCabinetFormProvidersComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserPersonalCabinetFormProvidersComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserPersonalCabinetFormProvidersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-personal-cabinet-form-providers.component.spec.js.map