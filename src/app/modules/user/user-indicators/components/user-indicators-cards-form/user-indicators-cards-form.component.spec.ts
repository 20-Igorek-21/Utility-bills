import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndicatorsCardsFormComponent } from './user-indicators-cards-form.component';

describe('UserIndicatorsCardsFormComponent', () => {
  let component: UserIndicatorsCardsFormComponent;
  let fixture: ComponentFixture<UserIndicatorsCardsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIndicatorsCardsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIndicatorsCardsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
