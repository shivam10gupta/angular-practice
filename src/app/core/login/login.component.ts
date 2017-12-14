import { Component, AfterViewInit } from '@angular/core';
import { LoginData } from "../core.model";
import { } from "";
import * as $ from 'jquery';
import { CoreService } from "../core.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    public loginData: LoginData;

    ngAfterViewInit() {
        $(".abc").hide();
    }

    constructor(public coreService: CoreService, public http: HttpClient) {
        this.loginData = new LoginData();
    }

    login() {
        // this.coreService.loginData(this.loginData).then(response => {
        //     if (response && response.success && response.data) {
        //     } else if (response) {
        //     }
        // });

        this.http
            .post("http://192.168.7.53:9095/demoproject/api/register", this.loginData, {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }).subscribe(data => {
                console.log(data);
                // Read the result field from the JSON response.
                // this.results = data['results'];
            });
    }

}
