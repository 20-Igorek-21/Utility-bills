import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorsCardsComponent } from './indicators-cards.component';

describe('IndicatorsCardsComponent', () => {
  let component: IndicatorsCardsComponent;
  let fixture: ComponentFixture<IndicatorsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
