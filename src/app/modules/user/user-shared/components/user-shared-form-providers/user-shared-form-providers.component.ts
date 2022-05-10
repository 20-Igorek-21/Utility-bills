import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormControl} from '@ngneat/reactive-forms';

@Component({
    'selector': 'app-user-shared-form-providers',
    'templateUrl': './user-shared-form-providers.component.html',
    'styleUrls': ['./user-shared-form-providers.component.css']
})
export class UserSharedFormProvidersComponent {

    isShowGas = false;
    isShowOblenergo = false;
    isShowKhimvolokno = false;
    isShowVodokanal = false;

    changeStatusGas() {
        this.isShowGas = !this.isShowGas;
    }

    changeStatusOblenergo() {
        this.isShowOblenergo =!this.isShowOblenergo;
    }

    changeStatusKhimvolokno() {
        this.isShowKhimvolokno = !this.isShowKhimvolokno;
    }
    changeStatusVodokanal() {
        this.isShowVodokanal = !this.isShowVodokanal;
    }

    providersForm: FormGroup = new FormGroup({
        gasNumber: new FormControl<number | null>(null),
        gasId: new FormControl<string>('d6bec95b-1345-44a0-9d85-64a038382005'),
        gasStatus: new FormControl<boolean>(false),
        oblenergoNumber: new FormControl<number | null>(null),
        oblenergoId: new FormControl<string>('38b5c1ab-24fb-4c4c-8351-5e9dcdcc8778'),
        oblenergoStatus: new FormControl<boolean>(false),
        khimvoloknoNumber: new FormControl<number | null>(null),
        khimvoloknoId: new FormControl<string>('2f0906c2-9ffe-4327-9015-de9a483dcbeb'),
        khimvoloknoStatus: new FormControl<boolean>(false),
        khimvoloknoCounterInstalled: new FormControl<string>('Ванна'),
        vodokanalNumber: new FormControl<number | null>(null),
        vodokanalId: new FormControl<string>('c3f89ec7-ae6a-4c9a-8ee3-c9081c1b330b'),
        vodokanalStatus: new FormControl<boolean>(false)
    })
}
