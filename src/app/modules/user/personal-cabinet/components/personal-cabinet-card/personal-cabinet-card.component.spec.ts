import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCabinetCardComponent } from './personal-cabinet-card.component';

describe('PersonalCabinetCardComponent', () => {
  let component: PersonalCabinetCardComponent;
  let fixture: ComponentFixture<PersonalCabinetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCabinetCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCabinetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
