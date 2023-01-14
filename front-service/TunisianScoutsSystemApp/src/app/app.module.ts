import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ROUTING} from "./app.routing";
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './auth/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule} from "@angular/common/http";
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ArticleCardComponent } from './personalSpace/article-card/article-card.component';
import { UserCardComponent } from './personalSpace/user-card/user-card.component';
import { ArticleAddComponent } from './personalSpace/article-add/article-add.component';
import { ArticleEditComponent } from './personalSpace/article-edit/article-edit.component';
import { ArticleEditCardComponent } from './personalSpace/article-edit-card/article-edit-card.component';
import { ArticleListComponent } from './personalSpace/article-list/article-list.component';
import { ArticleListCardComponent } from './personalSpace/article-list-card/article-list-card.component';
import { MySpaceComponent } from './personalSpace/my-space/my-space.component';
import { MySpaceArticleCardComponent } from './personalSpace/my-space-article-card/my-space-article-card.component';
import { MySpaceUserCardComponent } from './personalSpace/my-space-user-card/my-space-user-card.component';
import { NavComponent } from './shared/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    ArticleCardComponent,
    UserCardComponent,
    ArticleAddComponent,
    ArticleEditComponent,
    ArticleEditCardComponent,
    ArticleListComponent,
    ArticleListCardComponent,
    MySpaceComponent,
    MySpaceArticleCardComponent,
    MySpaceUserCardComponent,
    NavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTING,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
