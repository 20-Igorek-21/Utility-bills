import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[appConfirmPasswordValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ConfirmPasswordValidatorDirective,
            multi: true
        }
    ]
})
export class ConfirmPasswordValidatorDirective implements Validator {

   @Input() appConfirmPasswordValidator: any;
   validate(control: AbstractControl): {[key: string]: unknown} | null {
       const controlToCompare = control.parent?.get(this.appConfirmPasswordValidator)
       if (controlToCompare?.value !== control.value ) {
           return { 'notMatch': true }
       }
       return null
   }

}
