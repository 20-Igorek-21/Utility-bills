import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[appToggleButton]'
})
export class ToggleButtonDirective {

    @HostBinding('class.main-navigation__switch-menu') isShowBurgerMenu = false;

    @Input() set showBurgerMenu(value: boolean) {
        this.isShowBurgerMenu = value;
    }

    @HostBinding('class.app-main-layout__lock') isShowLayoutLock = false;


    @HostBinding('class.content-page__app-personal-cabinet-form-editor')  isShowEditorForm = false;

    @Input() set showEditorForm(value: boolean) {
        this.isShowEditorForm = value;
    }

}
