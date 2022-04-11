import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, Validators} from "@angular/forms";
import {FormControl} from "@ngneat/reactive-forms";
import {MIN_LENGTH_SYMBOL} from "../../../../../constants";

@Component({
  selector: 'app-auth-register-form',
  templateUrl: './auth-register-form.component.html',
  styleUrls: ['./auth-register-form.component.css']
})
export class AuthRegisterFormComponent  {
    constructor( private router: Router ) { }
    @Input()
    registerForm: FormGroup = new FormGroup({
        userName: new FormControl<string>(''),
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        password: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
        re_password: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
    })



    public get controls() {
        return {
            userName: this.registerForm.get('userName') as FormControl<string>,
            email: this.registerForm.get('email') as FormControl<string>,
            password: this.registerForm.get('password') as FormControl<string>,
            re_password: this.registerForm.get('password') as FormControl<string>,
        }
    }

    public onSubmit() {
        if (!this.registerForm.invalid) {
            alert(this.registerForm.value.userName+ '  '  + this.registerForm.value.email + '  ' + this.registerForm.value.password);
            this.registerForm.reset();
        }

    }
}
