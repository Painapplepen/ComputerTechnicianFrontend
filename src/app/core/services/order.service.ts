import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { FoundOrder, Order } from "../interfaces/interfaces";

@Injectable({providedIn: 'root'})
export class OrderService {

  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  public FoundAllOrders():Observable<FoundOrder[]> {
    return this.http.get<FoundOrder[]>(`${environment.serverUrl}order`);
  }


  public GetOrderById(id):Observable<Order> {
    return this.http.get<Order>(`${environment.serverUrl}order/${id}`);
  }

  public AddOrder(order: Order):Observable<Order> {
    return this.http.post<Order>(`${environment.serverUrl}order`, order);
  }

  public UpdateOrder(order: Order):Observable<Order> {
    return this.http.put<Order>(`${environment.serverUrl}order/${order.id}`, order);
  }

  public DeleteOrder(id):Observable<any> {
    return this.http.delete<any>(`${environment.serverUrl}order/${id}`);
  }
}