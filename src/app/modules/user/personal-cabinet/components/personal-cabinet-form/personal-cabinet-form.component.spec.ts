import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCabinetFormComponent } from './personal-cabinet-form.component';

describe('PersonalCabinetFormComponent', () => {
  let component: PersonalCabinetFormComponent;
  let fixture: ComponentFixture<PersonalCabinetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCabinetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCabinetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
