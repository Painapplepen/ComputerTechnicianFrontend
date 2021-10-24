import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean | Promise<boolean> {
    if (this.authService.isAdmin()) return true;
    else {
      this.router.navigate(['']);
      return false;
    }
  }
}
