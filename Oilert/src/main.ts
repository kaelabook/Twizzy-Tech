import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Show main Oilert page
  { path: 'login', component: LoginComponent } // Login page (but non-functional)
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()]
});
