/**
 * Created by yrik6 on 07.07.2016.
 */
import { Injectable }            from '@angular/core';
import { CanActivate, Router }   from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router:Router) {
        
    }

    canActivate() {
        
        if (window.localStorage.getItem('auth_key')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}