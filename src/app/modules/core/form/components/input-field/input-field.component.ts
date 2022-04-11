import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef( () => InputFieldComponent),
            multi: true
        }
    ]
})
export class InputFieldComponent implements ControlValueAccessor {
    @Input()
    public label!: string;
    @Input()
    public type!:string | number;
    public value = '';

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
