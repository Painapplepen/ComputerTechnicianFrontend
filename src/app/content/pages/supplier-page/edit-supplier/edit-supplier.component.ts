import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/core/interfaces/interfaces';
import { SupplierService } from 'src/app/core/services/supplier.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  supplier: Supplier;
  isEditMode = false;

  constructor( private router: Router,
    private supplierService: SupplierService) { }

  ngOnInit(): void {
    const options = history.state.options;
    this.supplier = options && options.supplier;
    this.form = new FormGroup({
      supplierName: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      supplierAddress: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      supplierCity: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      supplierCountry: new FormControl('', [Validators.required, Validators.maxLength(24)])
    });
    if(this.supplier) {
      this.form.get("supplierName").setValue(this.supplier.name);
      this.form.get("supplierAddress").setValue(this.supplier.address);
      this.form.get("supplierCity").setValue(this.supplier.city);
      this.form.get("supplierCountry").setValue(this.supplier.country);
      this.isEditMode = true;
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const supplier: Supplier = {
      name: this.form.value.supplierName,
      address: this.form.value.supplierAddress,
      city: this.form.value.supplierCity,
      country: this.form.value.supplierCountry,
    };
    if(this.isEditMode){
      supplier.id = this.supplier.id;
      this.supplierService.UpdateSupplier(supplier).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'supplier']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
        this.isEditMode = false;
      });
    }else {
      this.supplierService.AddSupplier(supplier).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'supplier']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
      });
    }
  }

}
