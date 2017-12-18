import { Injectable } from '@angular/core';
@Injectable()
export class ServerApi {
    public serverUrl: string = "http://192.168.6.233:9095/"
    public loginUrl: string;
    public registerUrl: string;

    constructor() {
        this.loginUrl = this.serverUrl + "demoproject/api/login";
        this.registerUrl = this.serverUrl + "demoproject/api/register";
    }
}
