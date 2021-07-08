import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './_services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
    constructor( private authService: AuthService ,private _router : Router) {}

    canActivate(): boolean {
      if (this.authService.loggedin()){
        return true
      }
      else {
        this._router.navigate(['\login'])
      }
    }
  
}
