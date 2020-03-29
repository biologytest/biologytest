import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { AppComponent } from './app.component';
import { HomepageService } from './service/homepage.service';
import { TestComponent } from './test/test.component';
import { PreparationComponent } from './preparation/preparation.component';
import { TestListComponent } from './test/test-list/test-list.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
