import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoundManafacture, Order } from 'src/app/core/interfaces/interfaces';
import { ManafactureService } from 'src/app/core/services/manafacture.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  order: Order;
  isEditMode = false;
  manufacturs$: FoundManafacture[];

  constructor( private router: Router,
    private orderService: OrderService,
    private manufacturService: ManafactureService) { }

  ngOnInit(): void {
    this.manufacturService.FoundAllManafactures().subscribe((value) => {
      this.manufacturs$ = value;
    });
    const options = history.state.options;
    this.order = options && options.order;
    this.form = new FormGroup({
      orderStatus: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      orderDate: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      orderTime: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      manufacture: new FormControl('', [Validators.required])
    });
    if(this.order) {
      this.form.get("orderStatus").setValue(this.order.orderStatus);
      this.form.get("orderDate").setValue(this.order.orderDate);
      this.form.get("orderTime").setValue(this.order.orderTime);
      this.form.get("manufacture").setValue(this.order.manufactureId);
      this.isEditMode = true;
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    debugger
    this.submitted = true;
    const order: Order = {
      orderStatus: this.form.value.orderStatus,
      orderDate: this.form.value.orderDate,
      orderTime: this.form.value.orderTime,
      manufactureId: +this.form.value.manufacture,
    };
    if(this.isEditMode){
      order.id = this.order.id;
      this.orderService.UpdateOrder(order).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'order']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
        this.isEditMode = false;
      });
    }else {
      this.orderService.AddOrder(order).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'order']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
      });
    }
  }
}
