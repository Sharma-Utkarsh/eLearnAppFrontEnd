import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MentorsComponent } from './mentors/mentors.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : "" , redirectTo : "home" , pathMatch : "full" 
  },
  {
    path : "home" , component : HomeComponent
  },
  {
    path : "courses" , component : CoursesComponent 
  },
  {
    path : "register" , component : RegisterComponent
  },
  {
    path : "login" , component : LoginComponent
  },
  {
    path : "mentors" , component : MentorsComponent
  },
  {
    path : "**" , component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
