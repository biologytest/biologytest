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
    TestThemesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HomepageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
