
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable()

export class AuthGuard implements CanActivate{

    constructor(private auth: AuthService,
        private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(this.auth.isAuthenticated()){
            return true
        }

        this.auth.logout()
        this.router.navigate(['login'], {queryParams: {loginAgain: true}})
        return false
    }

}
