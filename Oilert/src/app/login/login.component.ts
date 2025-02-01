import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,  // Enable standalone mode
  imports: [FormsModule, NgIf],  // Add necessary imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username && this.password) {
      this.router.navigate(['/app']); // Redirect to main app
    } else {
      alert('Please enter username and password');
    }
  }
}
