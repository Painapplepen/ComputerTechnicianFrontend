import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faLongArrowAltDown, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { FoundOrder, Order } from 'src/app/core/interfaces/interfaces';
import { OrderService } from 'src/app/core/services/order.service';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  faLongArrowAltDown = faLongArrowAltDown;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  orders$: FoundOrder[];

  constructor(private router: Router,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.FoundAllOrders().subscribe((data) => {
      this.orders$ = data
    });
  }

  addItem() {
    const log = this.router.navigate(['/admin', 'edit-order']);
  }

  deleteItem(order: Order){
    if(!confirm(`Are you sure you want to delete ?`)){
      return;
    }
    this.orderService.DeleteOrder(order.id).subscribe(() => {
      this.orderService.FoundAllOrders().subscribe((data) => {
        this.orders$ = data
      });
    });
  }

  editItem(order: Order){
      this.router.navigate(['/admin', 'edit-order'], {
        state: {
          options: {
            order
          }
        }
      });
  }

}
