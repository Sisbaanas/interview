import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  isLogin = false;

  constructor(private router: Router) { }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  private getRole(token: any) {
    const role = (JSON.parse(atob(token.split('.')[1]))).Role;
    return role;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const token = localStorage.getItem("Authorization");
    let found = false;

    if (state.url.split("/")[1] == "auth") {
      return true;
    }
    else if (token && token != "") {
      if (this.tokenExpired(String(token))) {
        this.router.navigateByUrl('/auth/login');
      } else if ("user" == this.getRole(token).toLocaleLowerCase()) {
        found = true;
      }
    } else {
      this.router.navigateByUrl('/auth/login');
    }
    return found;
  }



}
