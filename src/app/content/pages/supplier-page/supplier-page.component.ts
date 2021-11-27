import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faLongArrowAltDown, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { FoundSupplier, Supplier } from 'src/app/core/interfaces/interfaces';
import { SupplierService } from 'src/app/core/services/supplier.service';

@Component({
  selector: 'app-supplier-page',
  templateUrl: './supplier-page.component.html',
  styleUrls: ['./supplier-page.component.scss']
})
export class SupplierPageComponent implements OnInit {

  faLongArrowAltDown = faLongArrowAltDown;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  suppliers$: FoundSupplier[];

  constructor(private router: Router,
    private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.supplierService.FoundAllSuppliers().subscribe((data) => {
      this.suppliers$ = data
    });
  }

  addItem() {
    const log = this.router.navigate(['/admin', 'edit-supplier']);
  }

  deleteItem(supplier: Supplier){
    if(!confirm(`Are you sure you want to delete ${supplier.name} ?`)){
      return;
    }
    this.supplierService.DeleteSupplier(supplier.id).subscribe(() => {
      this.supplierService.FoundAllSuppliers().subscribe((data) => {
        this.suppliers$ = data
      });
    });
  }

  editItem(supplier: Supplier){
      this.router.navigate(['/admin', 'edit-supplier'], {
        state: {
          options: {
            supplier
          }
        }
      });
  }
}
