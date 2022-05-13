import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appToggleButton]'
})
export class ToggleButtonDirective {

    constructor(private elementRef: ElementRef) {}

    @HostBinding('class.content-page__app-form-add-account')  isShowFormAddAccount = false;

    @Input() set showFormAddAccount(value: boolean) {
        this.isShowFormAddAccount = value;
    }

    @HostBinding('class.content-page__app-form-change-account')  isShowFormChangeAccount = false;

    @Input() set showFormChangeAccount(value: boolean) {
        this.isShowFormChangeAccount = value;
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
