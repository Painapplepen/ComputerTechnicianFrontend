import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserForAuthentication } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  message: string;

  constructor(public authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe( (params: Params) => {
      if (params.loginAgain) {
        this.message = 'Please, enter data';
      } else if (params.authFailed) {
        this.message = 'Session ended. Enter data again.';
      }
    });

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  register() {
    this.router.navigate(['/register']);
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: UserForAuthentication = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/admin']);
      this.submitted = false;
    }, () => {
      this.submitted = false;
    });
  }

}
