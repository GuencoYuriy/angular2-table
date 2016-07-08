/**
 * Created by yrik6 on 04.07.2016.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthenticationService {
    isLoggedin: boolean;

    constructor ( private _http:Http ) {

    }

    LoginIn(usercreds: any)  {
        this.isLoggedin = false;
        var headers = new Headers();
        var creds = 'username=' + usercreds.username + '&password=' + usercreds.password;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise((resolve) => {
            this._http.post('http://localhost:8888/api/users/user/login', creds, {headers: headers}).subscribe((data) => {
                    if(data.json().success) {
                        window.localStorage.setItem('auth_key', data.json().token);
                        this.isLoggedin = true;
                    }
                    resolve(this.isLoggedin)
                }
            )
        })
    }

    LoginOut() {
        window.localStorage.removeItem('auth_key');
        this.isLoggedin = false;
    }
}