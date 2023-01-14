import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {LandingComponent} from "./landing/landing.component";
import {ArticleAddComponent} from "./personalSpace/article-add/article-add.component";
import {ArticleEditComponent} from "./personalSpace/article-edit/article-edit.component";
import {ArticleListComponent} from "./personalSpace/article-list/article-list.component";
import {MySpaceComponent} from "./personalSpace/my-space/my-space.component";



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'addArticle', component: ArticleAddComponent},
  {path: 'editArticle/:articleId', component: ArticleEditComponent},
  {path: 'getAllArticles', component: ArticleListComponent},
  {path: 'myspace', component: MySpaceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
