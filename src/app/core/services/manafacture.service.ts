import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { FoundManafacture, Manafacture } from "../interfaces/interfaces";

@Injectable({providedIn: 'root'})
export class ManafactureService {

  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  public FoundAllManafactures():Observable<FoundManafacture[]> {
    return this.http.get<FoundManafacture[]>(`${environment.serverUrl}manufacture`);
  }


  public GetManafactureById(id):Observable<Manafacture> {
    return this.http.get<Manafacture>(`${environment.serverUrl}manufacture/${id}`);
  }

  public AddManafacture(manafacture: Manafacture):Observable<Manafacture> {
    return this.http.post<Manafacture>(`${environment.serverUrl}manufacture`, manafacture);
  }

  public UpdateManafacture(manafacture: Manafacture):Observable<Manafacture> {
    return this.http.put<Manafacture>(`${environment.serverUrl}manufacture/${manafacture.id}`, manafacture);
  }

  public DeleteManafacture(id):Observable<any> {
    return this.http.delete<any>(`${environment.serverUrl}manufacture/${id}`);
  }
}
