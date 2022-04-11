import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[appSwitchMenu]'
})
export class SwitchMenuDirective {

    @HostBinding('class.main-navigation__switch-menu') isShowMenu = false;

    @Input() set isShow(value: boolean) {
        this.isShowMenu = value;
    }

}
