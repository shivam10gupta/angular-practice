import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { LoginData } from "../core.model";
import * as $ from 'jquery';
import { CoreService } from "../core.service";


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    @ViewChild('form') public form;
    public loginData: LoginData;

    ngAfterViewInit() {
    }

    constructor(public coreService: CoreService) {
        this.loginData = new LoginData();
    }

    login() {
        this.form.reset();
        this.form._submitted = false;
        // if (this.form.valid) {
        //     this.coreService.loginData(this.loginData).then(response => {


        //         if (response && response.success && response.data) {
        //         } else if (response) {
        //         }
        //     });
        // }
    }

}
