import { Component } from '@angular/core';

@Component({
    selector: 'app-user-personal-cabinet-form-editor-page-view',
    templateUrl: './user-personal-cabinet-form-editor-page-view.component.html',
    styleUrls: ['./user-personal-cabinet-form-editor-page-view.component.css']
})
export class UserPersonalCabinetFormEditorPageViewComponent {

    public isLock = false;

    public lock(): void {
        this.isLock = true;
    }

    public unLock(): void {
        this.isLock = false;
    }
}
