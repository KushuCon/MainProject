import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  isLoggedIn(): boolean {
    return this.loggedIn; // Return true if logged in, else false
  }

  login(username: string, password: string): boolean {
    // Replace this with your real authentication logic
    if (username === 'admin' && password === 'password') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
