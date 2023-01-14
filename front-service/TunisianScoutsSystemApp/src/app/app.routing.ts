import { ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";



const APP_ROUTING: Routes = [
  {path: 'login', component: LoginComponent},
 // {path: 'register', component: RegisterComponent}
];

export const ROUTING =  RouterModule.forRoot(APP_ROUTING);
