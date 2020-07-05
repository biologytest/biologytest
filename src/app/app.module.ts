import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { HomepageService } from "./service/homepage.service";
import { TestComponent } from './test/test.component';
import { PreparationComponent } from './preparation/preparation.component';
import { TestListComponent } from './test/test-list/test-list.component';
import { TestListItemComponent } from './test/test-list/test-list-item/test-list-item.component';
import { TestThemesComponent } from './test/test-themes/test-themes.component';
import { TestThemesItemComponent } from './test/test-themes/test-themes-item/test-themes-item.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassesItemComponent } from './classes/classes-list/classes-item/classes-item.component';
import { ClassesListComponent } from './classes/classes-list/classes-list.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthService} from "./service/auth.service";
import {AuthGuard} from "./auth.guard";
import {TokenInterceptorService} from "./token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    TestComponent,
    PreparationComponent,
    TestListComponent,
    TestListItemComponent,
    TestThemesComponent,
    TestThemesItemComponent,
    ClassesComponent,
    ClassesItemComponent,
    ClassesListComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [HomepageService, AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
