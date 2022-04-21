import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCabinetFormPageComponent } from './personal-cabinet-form-page.component';

describe('PersonalCabinetFormPageComponent', () => {
  let component: PersonalCabinetFormPageComponent;
  let fixture: ComponentFixture<PersonalCabinetFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCabinetFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCabinetFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
