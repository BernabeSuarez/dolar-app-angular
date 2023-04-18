import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentUser: any | null;
  usuario: string | null;
  constructor(
    private userService: UserService,
    private route: Router,
    private auth: Auth
  ) {}

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.currentUser = user.displayName;
      } else {
      }
    });
  }

  logout() {
    this.currentUser = null;
    this.userService
      .logout()
      .then(() => {
        this.route.navigate(['/login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  login() {
    this.route.navigate(['login']);
  }
}
