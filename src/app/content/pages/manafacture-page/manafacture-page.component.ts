import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faLongArrowAltDown, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { FoundManafacture, Manafacture } from 'src/app/core/interfaces/interfaces';
import { ManafactureService } from 'src/app/core/services/manafacture.service';

@Component({
  selector: 'app-manafacture-page',
  templateUrl: './manafacture-page.component.html',
  styleUrls: ['./manafacture-page.component.scss']
})
export class ManafacturePageComponent implements OnInit {

  faLongArrowAltDown = faLongArrowAltDown;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  manafactures$: FoundManafacture[];

  constructor(private router: Router,
    private manafactureService: ManafactureService) { }

  ngOnInit(): void {
    this.manafactureService.FoundAllManafactures().subscribe((data) => {
      this.manafactures$ = data
    });
  }

  addItem() {
    const log = this.router.navigate(['/admin', 'edit-manufacture']);
  }

  deleteItem(manafacture: Manafacture){
    if(!confirm(`Are you sure you want to delete ${manafacture.name} ?`)){
      return;
    }
    this.manafactureService.DeleteManafacture(manafacture.id).subscribe(() => {
      this.manafactureService.FoundAllManafactures().subscribe((data) => {
        this.manafactures$ = data
      });
    });
  }

  editItem(manafacture: Manafacture){
      this.router.navigate(['/admin', 'edit-manufacture'], {
        state: {
          options: {
            manafacture
          }
        }
      });
  }
}
