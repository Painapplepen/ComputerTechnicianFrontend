// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable, Subject } from "rxjs";
// import { environment } from "src/environments/environment";
// import { FoundOrder, Profile } from "../interfaces/interfaces";

// @Injectable({providedIn: 'root'})
// export class HomePageService {

//   public error$: Subject<string> = new Subject<string>();
//   constructor(private http: HttpClient) {}

//   public FoundAllAuthors():Observable<FoundOrder[]> {
//     return this.http.get<FoundOrder[]>(`${environment.serverUrl}profile/getAll`);
//   }


//   public GetBookById(id):Observable<Order> {
//     return this.http.get<Order>(`${environment.serverUrl}profile/${id}`);
//   }

//   public AddBook(profile: Order):Observable<Order> {
//     return this.http.post<Order>(`${environment.serverUrl}profile`, profile);
//   }

//   public UpdateBook(profile: Order):Observable<Order> {
//     return this.http.put<Order>(`${environment.serverUrl}profile/${profile.id}`, profile);
//   }

//   public DeleteBook(id):Observable<any> {
//     return this.http.delete<any>(`${environment.serverUrl}profile/${id}`);
//   }
// }