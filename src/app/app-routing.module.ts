import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { AppComponent } from './app.component';
import { HomepageService } from './service/homepage.service';
import { TestComponent } from './test/test.component';
import { PreparationComponent } from './preparation/preparation.component';
import { TestListComponent } from './test/test-list/test-list.component';
import {ClassesListComponent} from "./classes/classes-list/classes-list.component";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [HomepageService]
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'classes',
    component: ClassesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tests',
    component: TestComponent
  },
  {
    path: 'prepare',
    component: PreparationComponent
  },
  {
    path: 'tests/start',
    component: TestListComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
