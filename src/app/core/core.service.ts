import { Injectable } from '@angular/core';
import { ServerApi } from '../server.apis';
import { ResourceService } from './../shared/services/resource.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CoreService {
    constructor(public serverApi: ServerApi, public resourceService: ResourceService) {

    }

    loginData(data) {
        return this.resourceService.sendPostRequest(data, this.serverApi.loginUrl).then(response => {
            return response;
        }).catch((err) => {
        });
    }

    registerData(data) {
        return this.resourceService.sendPostRequest(data, this.serverApi.registerUrl).then(response => {
            return response;
        }).catch((err) => {
        });
    }


}