import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { ProductSearchCondition, TotalPage } from "../interfaces/interfaces";

@Injectable({providedIn: 'root'})
export class HomePageService {

  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  public FoundAllData(conditions: ProductSearchCondition):Observable<TotalPage> {
    return this.http.post<TotalPage>(`${environment.serverUrl}product/search`, conditions);
  }

}
