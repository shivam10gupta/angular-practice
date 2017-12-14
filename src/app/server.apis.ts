import { Injectable } from '@angular/core';
@Injectable()
export class ServerApi {
    public loginUrl: string;

    constructor() {
        this.loginUrl = "http://192.168.7.53:9095/demoproject/api/register";
    }
}
