import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { AppComponent } from './app.component';
import { HomepageService } from './service/homepage.service';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [HomepageService]
  },
  {
    path: 'home',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
