import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLongArrowAltDown, faLongArrowAltUp, faEdit, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FoundProduct, Product, ProductSearchCondition } from 'src/app/core/interfaces/interfaces';
import { HomePageService } from 'src/app/core/services/home.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  form: FormGroup;
  faLongArrowAltDown = faLongArrowAltDown;
  items$: FoundProduct[];
  count: number;
  currentPage: number;
  selector = [
    "Name",
    "Processor",
    "VidioCard",
    "MemoryCapacity",
    "DriveConfiguration",
    "ScreenDiagonal",
    "ScreenResolution",
    "Cost",
    "Amount",
    "InStock",
  ];
  selectedValue: string;
  selectedType: string;
  propertyFilter: string = "name";
  private conditions: ProductSearchCondition = {
    name:[],
    processor: [],
    vidioCard: [],
    memoryCapacity: [],
    driveConfiguration: [],
    screenDiagonal: [],
    screenResolution: [],
    cost: [],
    amount: [],
    inStock: [],
    pageSize: 10,
    page: 0,
    sortDirection: "asc",
    sortProperty: "name"
  };
  icons = {
    name: faLongArrowAltDown,
    processor: faLongArrowAltDown,
    vidioCard: faLongArrowAltDown,
    memoryCapacity: faLongArrowAltDown,
    driveConfiguration: faLongArrowAltDown,
    screenDiagonal: faLongArrowAltDown,
    screenResolution: faLongArrowAltDown,
    cost: faLongArrowAltDown,
    amount: faLongArrowAltDown,
    inStock: faLongArrowAltDown
  };


  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.FoundAllData(this.conditions).subscribe((value) => {
      this.items$ = value.items;
      this.count = value.totalCount;
      this.currentPage = 0;
    });
    this.form = new FormGroup({
      inputValue: new FormControl(),
      selectType: new FormControl(null)
    });
  }

  submit() {
    if(this.form.get("inputValue").value){
      this.selectedValue = this.form.get("inputValue").value;
      this.form.get("inputValue").setValue("");
      console.log(this.form.get("selectType").value)
      this.selectedType = this.form.get("selectType").value;
      switch(this.selectedType) {
        case "ISBN": {
          this.conditions.name.push(this.selectedValue);
          break;
        };
        case "Title": {
          this.conditions.processor.push(this.selectedValue);
          break;
        };
        case "Pages": {
          this.conditions.vidioCard.push(this.selectedValue);
          break;
        };
        case "Year": {
          this.conditions.memoryCapacity.push(+this.selectedValue);
          break;
        };
        case "Name": {
          this.conditions.driveConfiguration.push(this.selectedValue);
          break;
        };
        case "Surname": {
          this.conditions.screenDiagonal.push(+this.selectedValue);
          break;
        };
        case "Patronymic": {
          this.conditions.screenResolution.push(this.selectedValue);
          break;
        };
        case "Publisher": {
          this.conditions.cost.push(+this.selectedValue);
          break;
        };
        case "Genre": {
          this.conditions.amount.push(+this.selectedValue);
          break;
        };
        case "Library": {
          this.conditions.inStock.push(Boolean(+this.selectedValue));
          break;
        };
      }
    this.conditions.page = 0;
    this.conditions.pageSize = 10;
    this.conditions.sortProperty = this.propertyFilter;
    this.productService.FoundAllData(this.conditions).subscribe((value) => {
      this.items$ = value.items,
      this.count = value.totalCount
      this.currentPage = 0;
      this.conditions.name = [];
      this.conditions.processor = [];
      this.conditions.vidioCard = [];
      this.conditions.memoryCapacity = [];
      this.conditions.driveConfiguration = [];
      this.conditions.screenDiagonal = [];
      this.conditions.screenResolution = [];
      this.conditions.cost = [];
      this.conditions.amount = [];
      this.conditions.inStock = [];
    });
    }
  }

  changePage(newPage: number) {
    this.conditions.page = newPage;
    this.currentPage = newPage;
    this.productService.FoundAllData(this.conditions).subscribe((value) => {
      this.items$ = value.items,
      this.count = value.totalCount
    });
  }

  filter(property: string){
    if(this.icons[property] === faLongArrowAltDown){
      this.icons[property] = faLongArrowAltUp
      this.conditions.sortDirection = "asc";
    } else {
      this.icons[property] = faLongArrowAltDown
      this.conditions.sortDirection = "desc";
    }
    this.propertyFilter = property;
    this.conditions.page = 0;
    this.conditions.pageSize = 10;
    this.conditions.sortProperty = `${property}`;
    this.productService.FoundAllData(this.conditions).subscribe((value) => {
      this.items$ = value.items,
      this.count = value.totalCount
      this.currentPage = 0;
    });
  }

  addItem() {
    const log = this.router.navigate(['/admin', 'edit-product']);
  }

  deleteItem(product: Product){
    if(!confirm(`Are you sure you want to delete ${product.name} ?`)){
      return;
    }
    this.productService.DeleteProduct(product.id).subscribe(() => {
      this.productService.FoundAllData(this.conditions).subscribe((value) => {
        this.items$ = value.items,
        this.count = value.totalCount
      });
    });
  }

  editItem(product: Product){
      this.router.navigate(['/admin', 'edit-product'], {
        state: {
          options: {
            product
          }
        }
      });
  }

}
