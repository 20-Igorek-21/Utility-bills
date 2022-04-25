import { Component } from '@angular/core';
import { PersonalCabinetService } from '../../services';
import { IUserAccount } from '../../types/user-account.interface';

@Component({
    selector: 'app-personal-cabinet-form-editor-page',
    templateUrl: './personal-cabinet-form-editor-page.component.html',
    styleUrls: ['./personal-cabinet-form-editor-page.component.css']
})
export class PersonalCabinetFormEditorPageComponent {

    cards: IUserAccount []= []

    constructor(private readonly personalCabinetService: PersonalCabinetService) {
        this.fetchData()
    }

    fetchData() {
        this.personalCabinetService.fetshAccount()
            .subscribe( (data: IUserAccount[]) => {
                this.cards = data
            })
    }

    public massageText = true;
    public isShowEditorForm = true;

    public onShowEditorForm(): void {
        this.isShowEditorForm = false;
    }

    public isCloseEditorForm(): void {
        this.isShowEditorForm = true;
    }
}
