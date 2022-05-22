import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutPageRequestLoadingComponent } from './main-layout-page-request-loading.component';

describe('MainLayoutPageRequestLoadingComponent', () => {
    let component: MainLayoutPageRequestLoadingComponent;
    let fixture: ComponentFixture<MainLayoutPageRequestLoadingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ MainLayoutPageRequestLoadingComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MainLayoutPageRequestLoadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
