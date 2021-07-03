import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MentorsComponent } from './mentors/mentors.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardModeratorComponent } from './dashboard-moderator/dashboard-moderator.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    RegisterComponent,
    LoginComponent,
    MentorsComponent,
    HomeComponent,
    DashboardUserComponent,
    DashboardModeratorComponent,
    DashboardAdminComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
