import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  private validUsername = 'user';
  private validPassword = 'pass';

  constructor(private authService: AuthService, private router: Router) {} // Inject Router

  login() {
    // Validate against the AuthService instead of hard-coded values
    if (this.authService.login(this.username, this.password)) {
      this.message = 'Login successful!';
      this.router.navigate(['/dashboard']); // Navigate to dashboard
    } else {
      this.message = 'Login unsuccessful! Check your credentials.';
    }
  }
}
