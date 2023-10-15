import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  {path: 'login',component: LoginComponent},
  {path: 'post',component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
