import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Product, ProductSearchCondition, TotalPage } from "../interfaces/interfaces";

@Injectable({providedIn: 'root'})
export class ProductService {

  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  public FoundAllData(conditions: ProductSearchCondition):Observable<TotalPage> {
    return this.http.post<TotalPage>(`${environment.serverUrl}product/search`, conditions);
  }

  public GetProductById(id):Observable<Product> {
    return this.http.get<Product>(`${environment.serverUrl}product/${id}`);
  }

  public AddProduct(product: Product):Observable<Product> {
    return this.http.post<Product>(`${environment.serverUrl}product`, product);
  }

  public UpdateProduct(product: Product):Observable<Product> {
    return this.http.put<Product>(`${environment.serverUrl}product/${product.id}`, product);
  }

  public DeleteProduct(id):Observable<any> {
    return this.http.delete<any>(`${environment.serverUrl}product/${id}`);
  }
}
