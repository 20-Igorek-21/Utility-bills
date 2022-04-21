import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCabinetFormEditorPageComponent } from './personal-cabinet-form-editor-page.component';

describe('PersonalCabinetFormEditorPageComponent', () => {
  let component: PersonalCabinetFormEditorPageComponent;
  let fixture: ComponentFixture<PersonalCabinetFormEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCabinetFormEditorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCabinetFormEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
