import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { FoundUser, User } from "../interfaces/interfaces";

@Injectable({providedIn: 'root'})
export class UserService {

  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  public FoundAllUsers():Observable<FoundUser[]> {
    return this.http.get<FoundUser[]>(`${environment.serverUrl}user`);
  }


  public GetUserById(id):Observable<User> {
    return this.http.get<User>(`${environment.serverUrl}user/${id}`);
  }

  public AddUser(user: User):Observable<User> {
    return this.http.post<User>(`${environment.serverUrl}user`, user);
  }

  public UpdateUser(user: User):Observable<User> {
    return this.http.put<User>(`${environment.serverUrl}user/${user.id}`, user);
  }

  public DeleteUser(id):Observable<any> {
    return this.http.delete<any>(`${environment.serverUrl}user/${id}`);
  }
}