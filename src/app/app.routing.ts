
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./core/login/login.component";
import { RegistrationComponent } from "./core/registration/registration.component";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'registration',
        component: RegistrationComponent,
    }
    // {
    //     path: 'adminWeb',
    //     component: SidebarComponent,
    //     children: []
    // }
];

export const routing = RouterModule.forRoot(appRoutes);