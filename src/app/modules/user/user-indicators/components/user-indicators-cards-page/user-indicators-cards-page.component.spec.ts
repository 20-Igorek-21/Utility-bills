import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndicatorsCardsPageComponent } from './user-indicators-cards-page.component';

describe('IndicatorsCardsPageComponent', () => {
  let component: UserIndicatorsCardsPageComponent;
  let fixture: ComponentFixture<UserIndicatorsCardsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIndicatorsCardsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIndicatorsCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
