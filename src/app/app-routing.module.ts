import { RegistrationComponent } from './component/registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRatingComponent } from './component/edit-rating/edit-rating.component';
import { LoginComponent } from './component/login/login.component';
import { ViewRatingComponent } from './component/view-rating/view-rating.component';

const routes: Routes = [
  { path: '', component: ViewRatingComponent },
  { path: 'view-rating', component: ViewRatingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit-rating', component: EditRatingComponent },
  { path: 'register', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
