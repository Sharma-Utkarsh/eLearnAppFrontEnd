import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../common/appconstants';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
 
  login(credentials): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signin', {
      email: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
 
  register(user): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'register', {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      matchingPassword: user.matchingPassword,
      role : user.role,
      socialProvider: 'LOCAL'
    }, httpOptions);
  }
   loggedin(){
     return !!window.sessionStorage.getItem('token')
   }
}