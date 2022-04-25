import { Component } from '@angular/core';

@Component({
    selector: 'app-personal-cabinet-form-editor-page',
    templateUrl: './personal-cabinet-form-editor-page.component.html',
    styleUrls: ['./personal-cabinet-form-editor-page.component.css']
})
export class PersonalCabinetFormEditorPageComponent {

    public massageText = true;
    public isShowEditorForm = true;

    public onShowEditorForm(): void {
        this.isShowEditorForm = false;
    }

    public isCloseEditorForm(): void {
        this.isShowEditorForm = true;
    }
}
