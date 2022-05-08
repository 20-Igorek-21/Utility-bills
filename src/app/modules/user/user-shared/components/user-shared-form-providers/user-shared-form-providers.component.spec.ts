import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSharedFormProvidersComponent } from './user-shared-form-providers.component';

describe('UserSharedFormProvidersComponent', () => {
    let component: UserSharedFormProvidersComponent;
    let fixture: ComponentFixture<UserSharedFormProvidersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UserSharedFormProvidersComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserSharedFormProvidersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
