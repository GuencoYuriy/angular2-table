/**
 * Created by yrik6 on 04.07.2016.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../app/authentication.service';

@Component ({
    template: `<div style="position: relative" *ngIf="localUser.message">
                    <div id="Message">
                        wrong username or password
                    </div>
                </div>
                <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" (focus)="Focus()" [(ngModel)]="localUser.username">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" (focus)="Focus()" [(ngModel)]="localUser.password">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" data-id="chkPass" name="showpassword">Show password</label>
                    </div>
                    <hr/>
                    <button type="submit" class="btn btn-primary pull-right" (click)="Login()">Submit</button>
                </form>`,
    styleUrls: ['./app/login-form.component.css'],
    selector: 'login-form',
    providers: [ AuthenticationService ]
})

export class LoginFormComponent {
    localUser = {
        username: '',
        password: '',
        message: false
    }

    constructor ( private _service:AuthenticationService, private _router: Router ) {

    }

    Login() {
        this._service.LoginIn(this.localUser).then((res) => {
            if(res) {
                this.localUser.message = false;
                this._router.navigate(['admin']);
            }
            else {
                this.localUser.message = true;
                console.log(res);
            }
        })
    }

    Focus() {
        this.localUser.message = false;
    }
}