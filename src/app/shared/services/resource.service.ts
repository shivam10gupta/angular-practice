import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResourceService {
    constructor(public http: Http) {

    }

    sendLoginPostRequest(userInput: any, url: any) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(url, userInput, { headers: headers })
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch((error) => {
                this.loginHandleError(error);
            });
    }

    sendPostRequest(userInput: any, url: any) {
        // let user = this.baseUtils.getData("user");
        // let authtoken = (user) ? user.authtoken : "";
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.post(url, userInput, { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch((error) => {
                this.handleError(error);
            });
    }

    sendDeleteRequest(url: any) {
        // let user = this.baseUtils.getData("user");
        // let authtoken = (user) ? user.authtoken : "";
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.delete(url)
            .toPromise()
            .then(res => res.json())
            .catch((error) => {
                this.handleError(error);
            });

    }

    sendGetRequest(url: any) {
        // let user = this.baseUtils.getData("user");
        // let authtoken = (user) ? user.authtoken : "";
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get(url, { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch((error) => {
                this.handleError(error);
            });
    }

    sendPutRequest(userInput: any, url: any) {
        // let user = this.baseUtils.getData("user");
        // let authtoken = (user) ? user.authtoken : "";
        let headers = new Headers({
            'Content-Type': 'application/json',
            // 'authtoken': authtoken
        });
        return this.http.put(url, userInput, { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch((error) => {
                this.handleError(error);
            });

    }


    loginHandleError(err: any) {
        if (err && err.status == 0) {
            $(".server_response").html("Connection to the server unsuccessful");
        } else {
            err = err.json();
            if (err && err.message) {
                $(".server_response").html(err.message);
            } else {
                $(".server_response").html("There is a problem processing your request. Please try again later");
            }
        }
    }

    handleError(err: any) {
        console.log("err " + JSON.stringify(err));
        if (err && err.status == 0) {
            //  this.baseUtils.showErrorMessage("Connection to the server unsuccessful", true);
        } else {
            err = err.json();
            if (err && err.status == "UNAUTHORIZED") {
                //  this.baseUtils.showErrorMessage("Your session time has expired, please log in again", true);
                setTimeout(() => {
                    // this.baseUtils.redirectToLogin();
                }, 3000);
            } else if (err && err.message) {
                //  this.baseUtils.showErrorMessage("There is a problem processing your request. Please try again later", true);
            }
        }
    }

}