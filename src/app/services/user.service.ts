import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from '@angular/fire/auth';

import { LoginData } from 'src/interfaces/login.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: string | null;
  constructor(private auth: Auth, private toastr: ToastrService) {}
  showSuccess() {
    this.toastr.success(this.user ? this.user : '', 'Bienvenido');
  }
  showLogout() {
    this.toastr.success('Gracias por visitarnos', 'Hasta Luego');
  }

  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  async login({ email, password }: LoginData) {
    const res = await signInWithEmailAndPassword(this.auth, email, password);
    if (res) {
      this.user = res.user.displayName;
    }
    this.showSuccess();
    return this.user;
  }
  async loginWithGoogle() {
    const res = await signInWithPopup(this.auth, new GoogleAuthProvider());
    if (res) {
      this.user = res.user.displayName;
      localStorage.setItem('user', this.user ? this.user : '');
    }
    this.showSuccess();
    return this.user;
  }
  logout() {
    this.showLogout();
    localStorage.removeItem('user');
    return signOut(this.auth);
  }
}
