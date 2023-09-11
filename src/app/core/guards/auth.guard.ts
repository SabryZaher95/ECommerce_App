import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

/*@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _Router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(localStorage.getItem('UserToken') != null){
        return true;
      }else{
        this._Router.navigate(['/signin']);
        return false;
      }
  }

}*/

export const AuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(localStorage.getItem("UserToken")){
    return true;
  }
  return router.parseUrl('/signin');
}

