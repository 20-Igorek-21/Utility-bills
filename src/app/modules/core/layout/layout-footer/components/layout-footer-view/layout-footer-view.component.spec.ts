import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFooterViewComponent } from './layout-footer-view.component';

describe('LayoutFooterViewComponent', () => {
  let component: LayoutFooterViewComponent;
  let fixture: ComponentFixture<LayoutFooterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutFooterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutFooterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
