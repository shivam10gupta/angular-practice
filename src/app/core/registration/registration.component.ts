import { Component, AfterViewInit } from '@angular/core';
import { RegisterData } from "../core.model";
import * as $ from 'jquery';
import { CoreService } from "../core.service";


@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
})
export class RegistrationComponent {
    public registerData: RegisterData;

    ngAfterViewInit() {
    }

    constructor(public coreService: CoreService) {
        this.registerData = new RegisterData();
    }

    register() {
        this.coreService.registerData(this.registerData).then(response => {
            if (response && response.success && response.data) {
            } else if (response) {
            }
        });
    }


}
