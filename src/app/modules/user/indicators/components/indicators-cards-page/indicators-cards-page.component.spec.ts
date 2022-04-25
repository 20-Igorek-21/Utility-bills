import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorsCardsPageComponent } from './indicators-cards-page.component';

describe('IndicatorsCardsPageComponent', () => {
  let component: IndicatorsCardsPageComponent;
  let fixture: ComponentFixture<IndicatorsCardsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorsCardsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorsCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
