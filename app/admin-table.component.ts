/**
 * Created by yrik6 on 04.07.2016.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component ({
    template: '<h1>AdminTable</h1>' +
    '<button type="submit" class="btn btn-primary pull-right" (click)="OutUser()">Submit</button>',
    directives: [ROUTER_DIRECTIVES]
})

export class AdminTableComponent {
    constructor ( private _router:Router ) {

    }
    
    OutUser(){
        window.localStorage.removeItem('auth_key');
        this._router.navigate(['login']);
    }
}