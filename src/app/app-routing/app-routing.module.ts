import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "../pages/register/register.component";
import {LoginComponent} from "../pages/login/login.component";
import {HomeComponent} from "../pages/home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
