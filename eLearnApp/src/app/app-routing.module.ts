import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MentorsComponent } from './mentors/mentors.component';
import { HomeComponent } from './home/home.component';
import { componentFactoryName } from '@angular/compiler';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { AuthGuard } from './auth.guard';
import { DashboardModeratorComponent } from './dashboard-moderator/dashboard-moderator.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  /*{
    path : "" , redirectTo : "home" , pathMatch : "full" 
  },*/
  {
    path : "dashboarduser",
    component : DashboardUserComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "dashboardmoderator",
    component : DashboardModeratorComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "dashboardadmin",
    component : DashboardAdminComponent,
    canActivate : [AuthGuard]
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
