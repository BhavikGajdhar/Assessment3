import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class Auth1Guard implements CanActivate {

  constructor(private router:Router, private authService: AuthenticationService ) {
 
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authService.login) {
        alert('You are not allowed to view this page. You are redirected to login Page');
        
        this.router.navigate(["/**"],{ queryParams: { retUrl: route.url} });
        return false;

        //var urlTree = this.router.createUrlTree(['login']);
        //return urlTree;
    } 

    return true;
  }
  
}
