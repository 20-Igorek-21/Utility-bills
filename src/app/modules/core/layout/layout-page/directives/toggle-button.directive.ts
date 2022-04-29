import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appToggleButton]'
})
export class ToggleButtonDirective {

    constructor(private elementRef: ElementRef) {}

    @HostBinding('class.main-navigation__switch-menu') isShowBurgerMenu = false;

    @Input() set showBurgerMenu(value: boolean) {
        this.isShowBurgerMenu = value;
    }

    @HostBinding('class.content-page__app-personal-cabinet-form-editor')  isShowEditorForm = false;

    @Input() set showEditorForm(value: boolean) {
        this.isShowEditorForm = value;
    }

    @Input() set showLayoutLock(value: boolean) {
        if (value) {
            this.elementRef.nativeElement.children[0].className = 'main-layout-page main-layout-page__lock';
        }
        else {
            this.elementRef.nativeElement.children[0].className = 'main-layout-page';
        }
    }
}
