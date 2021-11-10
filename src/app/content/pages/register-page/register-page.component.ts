import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserForAuthorization } from 'src/app/core/interfaces/interfaces';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  message: string;

  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: UserForAuthorization = {
      email: this.form.value.email,
      userName: this.form.value.userName,
      password: this.form.value.password
    };

    this.authService.register(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/login']);
      this.submitted = false;
    }, () => {
      this.submitted = false;
    });
  }
}
