import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusesComponent } from './components/users/campuses/campuses.component';

const routes: Routes = [
  {path: 'campuses', component:CampusesComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
