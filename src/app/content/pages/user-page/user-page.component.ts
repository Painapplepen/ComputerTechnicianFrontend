import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faLongArrowAltDown, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { FoundUser, User } from 'src/app/core/interfaces/interfaces';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  faLongArrowAltDown = faLongArrowAltDown;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  users$: FoundUser[];

  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.FoundAllUsers().subscribe((data) => {
      this.users$ = data
    });
  }

  deleteItem(user: User){
    if(!confirm(`Are you sure you want to delete ${user.userName} ?`)){
      return;
    }
    this.userService.DeleteUser(user.id).subscribe(() => {
      this.userService.FoundAllUsers().subscribe((data) => {
        this.users$ = data
      });
    });
  }
}
