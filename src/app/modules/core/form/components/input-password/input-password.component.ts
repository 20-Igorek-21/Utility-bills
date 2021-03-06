import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-input-password',
    templateUrl: './input-password.component.html',
    styleUrls: ['./input-password.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef( () => InputPasswordComponent),
            multi: true
        }
    ]
})
export class InputPasswordComponent implements ControlValueAccessor {

    @Input()
    public label!: string;
    @Input()
    public required!: boolean;
    public value = '';
    public hide = true;

    public handleInput(value: string): void {
        this.onChange(value)
    }

    public writeValue(value: string): void {
        this.value = value;
    }

    public onChange(value: string): void {
        this.value = value;
    }

    public onTouched(): void{}

    public registerOnChange(fn: never) {
        this.onChange = fn;
    }

    public registerOnTouched(fn: never) {
        this.onTouched = fn;
    }

}
