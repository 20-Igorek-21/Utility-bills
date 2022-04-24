import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCabinetFormAddressComponent } from './personal-cabinet-form-address.component';

describe('PersonalCabinetFormAddressComponent', () => {
    let component: PersonalCabinetFormAddressComponent;
    let fixture: ComponentFixture<PersonalCabinetFormAddressComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PersonalCabinetFormAddressComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonalCabinetFormAddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
