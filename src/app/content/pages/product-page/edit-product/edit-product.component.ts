import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/interfaces/interfaces';
import { ProductService } from 'src/app/core/services/product.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  product: Product;
  productOpt: Product;
  isEditMode = false;

  constructor( private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    
    const options = history.state.options;
    this.productOpt = options && options.product;
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      releaseDate: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      processor: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      vidioCard: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      memoryCapacity: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      driveConfiguration: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      screenDiagonal: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      screenResolution: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      cost: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      amount: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      inStock: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      productTypeId: new FormControl('', [Validators.required, Validators.maxLength(24)]),
    });
    if(this.productOpt) {
      this.productService.GetProductById(this.productOpt.id).subscribe((value) => {
        this.product = value;
          this.form.get("name").setValue(this.product.name);
          this.form.get("releaseDate").setValue(this.product.releaseDate);
          this.form.get("processor").setValue(this.product.processor);
          this.form.get("vidioCard").setValue(this.product.vidioCard);
          this.form.get("memoryCapacity").setValue(this.product.memoryCapacity);
          this.form.get("driveConfiguration").setValue(this.product.driveConfiguration);
          this.form.get("screenDiagonal").setValue(this.product.screenDiagonal);
          this.form.get("screenResolution").setValue(this.product.screenResolution);
          this.form.get("cost").setValue(this.product.cost);
          this.form.get("amount").setValue(this.product.amount);
          this.form.get("inStock").setValue(this.product.inStock);
          this.form.get("productTypeId").setValue(this.product.productTypeId);
          this.isEditMode = true;
      });
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const product: Product = {
      name: this.form.value.name,
      releaseDate: this.form.value.releaseDate,
      processor: this.form.value.processor,
      vidioCard: this.form.value.vidioCard,
      memoryCapacity: +this.form.value.memoryCapacity,
      driveConfiguration: this.form.value.driveConfiguration,
      screenDiagonal: +this.form.value.screenDiagonal,
      screenResolution: this.form.value.screenResolution,
      cost: +this.form.value.cost,
      amount: +this.form.value.amount,
      inStock: Boolean(this.form.value.inStock),
      productTypeId: +this.form.value.productTypeId,
    };
    if(this.isEditMode){
      product.id = this.productOpt.id;
      this.productService.UpdateProduct(product).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'product']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
        this.isEditMode = false;
      });
    }else {
      this.productService.AddProduct(product).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'product']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
      });
    }
  }
}
