import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  constructor(
    private userService: UserService,
    private FormBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.registerForm = this.FormBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  onSubmit() {
    this.userService
      .register(this.registerForm.value)
      .then(() => {
        this.router.navigate(['login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  toLogin() {
    this.router.navigate(['login']);
  }
}
