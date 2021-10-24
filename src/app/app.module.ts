import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './content/pages/home-page/home-page.component';
import { LoginPageComponent } from './content/pages/login-page/login-page.component';
import { RegisterPageComponent } from './content/pages/register-page/register-page.component';
import { SpinnerComponent } from './content/layout/spinner/spinner.component';
import { PagesComponent } from './content/pages/pages.component';
import { FooterComponent } from './content/layout/footer/footer.component';
import { HeaderComponent } from './content/layout/header/header.component';
import { PaginationComponent } from './content/layout/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    SpinnerComponent,
    PagesComponent,
    FooterComponent,
    HeaderComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
