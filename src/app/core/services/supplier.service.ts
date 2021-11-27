import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { FoundSupplier, Supplier } from "../interfaces/interfaces";

@Injectable({providedIn: 'root'})
export class SupplierService {

  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  public FoundAllSuppliers():Observable<FoundSupplier[]> {
    return this.http.get<FoundSupplier[]>(`${environment.serverUrl}supplier`);
  }


  public GetSupplierById(id):Observable<Supplier> {
    return this.http.get<Supplier>(`${environment.serverUrl}supplier/${id}`);
  }

  public AddSupplier(supplier: Supplier):Observable<Supplier> {
    return this.http.post<Supplier>(`${environment.serverUrl}supplier`, supplier);
  }

  public UpdateSupplier(supplier: Supplier):Observable<Supplier> {
    return this.http.put<Supplier>(`${environment.serverUrl}supplier/${supplier.id}`, supplier);
  }

  public DeleteSupplier(id):Observable<any> {
    return this.http.delete<any>(`${environment.serverUrl}supplier/${id}`);
  }
}