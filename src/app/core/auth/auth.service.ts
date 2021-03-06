import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ServerAuthResponse, UserForAuthentication, UserForAuthorization } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {

    public error$: Subject<string> = new Subject<string>();
    constructor(private http: HttpClient) {}

    get token(): string {
      const expiresDate = new Date(localStorage.getItem('jwt-token-exp'));
      if (new Date() > expiresDate) {
        this.logout();
        return null;
      }
      return localStorage.getItem('jwt-token');
    }

    get roles(){
      const expDate = new Date(localStorage.getItem('jwt-token-exp'))
      if(new Date() > expDate){
          this.logout()
          return null
      }
      return localStorage.getItem('jwt-roles')
    }

    login(user: UserForAuthentication): Observable<any> {
      return this.http.post(`${environment.serverUrl}auth/login`, user)
        .pipe(
          tap(this.setToken),
          catchError(this.handleError.bind(this))
        );
    }

    register(user: UserForAuthorization): Observable<any> {
      return this.http.post(`${environment.serverUrl}auth/register`, user);
    }

    logout() {
      this.setToken(null);
    }

    isAuthenticated(): boolean {
      return !!this.token;
    }
    private handleError(error: HttpErrorResponse){
      return throwError(error)
  }

    private setToken(response: ServerAuthResponse | null) {
      if(!response){
        localStorage.clear();
        return;
      }
      const expiresDate = new Date(new Date().getTime() + 60 * 60 * 1000);
      localStorage.setItem('jwt-token', response.token);
      localStorage.setItem('jwt-token-exp', expiresDate.toString());
      localStorage.setItem('jwt-roles', response.role);
    }

    public isAdmin(): boolean{
      return this.roles.includes('Admin')
    }

    public isUser(): boolean{
      return this.roles != null && this.roles.includes('User') != null
    }
}
