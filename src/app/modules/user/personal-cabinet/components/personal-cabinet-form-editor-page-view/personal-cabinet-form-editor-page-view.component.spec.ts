import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCabinetFormEditorPageViewComponent } from './personal-cabinet-form-editor-page-view.component';

describe('PersonalCabinetFormEditorPageViewComponent', () => {
  let component: PersonalCabinetFormEditorPageViewComponent;
  let fixture: ComponentFixture<PersonalCabinetFormEditorPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCabinetFormEditorPageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCabinetFormEditorPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
