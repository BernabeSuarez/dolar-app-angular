import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  toRegister() {
    this.router.navigate(['register']);
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  loginSubmit() {
    if (this.loginForm.valid) {
      this.userService
        .login(this.loginForm.value)
        .then(() => {
          this.router.navigate(['/home']);
        })
        .catch(() => {
          alert('Usuario No registrado');
          this.loginForm.reset();
        });
    }
  }
  loginGoogle() {
    this.userService
      .loginWithGoogle()
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
