/**
 * Created by yrik6 on 04.07.2016.
 */
import { provideRouter, RouterConfig } from '@angular/router';
import { SendEmailComponent } from '../app/send-email.component';
import { AdminTableComponent } from '../app/admin-table.component';
import { LoginComponent } from '../app/login-component';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from '../app/auth.guard';

export const routes: RouterConfig = [
    { path: 'login', component: LoginComponent },
    { path: 'send-email', component: SendEmailComponent },
    { path: 'admin', component: AdminTableComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login'}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes), AuthGuard, AuthenticationService
];