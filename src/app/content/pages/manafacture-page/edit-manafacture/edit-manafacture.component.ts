import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Manafacture } from 'src/app/core/interfaces/interfaces';
import { ManafactureService } from 'src/app/core/services/manafacture.service';

@Component({
  selector: 'app-edit-manafacture',
  templateUrl: './edit-manafacture.component.html',
  styleUrls: ['./edit-manafacture.component.scss']
})
export class EditManafactureComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  manufacture: Manafacture;
  isEditMode = false;

  constructor( private router: Router,
    private manafactureService: ManafactureService) { }

  ngOnInit(): void {
    const options = history.state.options;
    this.manufacture = options && options.manafacture;
    this.form = new FormGroup({
      manafactureName: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      manafactureAddress: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      manafactureCity: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      manafactureCountry: new FormControl('', [Validators.required, Validators.maxLength(24)])
    });
    if(this.manufacture) {
      this.form.get("manafactureName").setValue(this.manufacture.name);
      this.form.get("manafactureAddress").setValue(this.manufacture.address);
      this.form.get("manafactureCity").setValue(this.manufacture.city);
      this.form.get("manafactureCountry").setValue(this.manufacture.country);
      this.isEditMode = true;
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const manufacture: Manafacture = {
      name: this.form.value.manafactureName,
      address: this.form.value.manafactureAddress,
      city: this.form.value.manafactureCity,
      country: this.form.value.manafactureCountry,
    };
    if(this.isEditMode){
      manufacture.id = this.manufacture.id;
      this.manafactureService.UpdateManafacture(manufacture).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'manufacture']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
        this.isEditMode = false;
      });
    }else {
      this.manafactureService.AddManafacture(manufacture).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'manufacture']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
      });
    }
  }
}
