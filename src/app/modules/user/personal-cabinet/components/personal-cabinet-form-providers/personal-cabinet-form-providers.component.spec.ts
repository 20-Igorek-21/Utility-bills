import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCabinetFormProvidersComponent } from './personal-cabinet-form-providers.component';

describe('PersonalCabinetFormProvidersComponent', () => {
    let component: PersonalCabinetFormProvidersComponent;
    let fixture: ComponentFixture<PersonalCabinetFormProvidersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PersonalCabinetFormProvidersComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonalCabinetFormProvidersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
