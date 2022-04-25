import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorsCardsPageViewComponent } from './indicators-cards-page-view.component';

describe('IndicatorsCardsPageViewComponent', () => {
  let component: IndicatorsCardsPageViewComponent;
  let fixture: ComponentFixture<IndicatorsCardsPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorsCardsPageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorsCardsPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
