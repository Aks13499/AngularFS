import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthenticationServiceService } from '../service/authentication/authentication-service.service';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constant';

const AUTH_API = API_URL + '/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationServiceService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  submitted = false;

  registerForm: FormGroup;

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  submitForm(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      const { username, email, password } = this.registerForm.value;

      this.authenticationService.register(username, email, password).subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        },
      });
    }
  }
}
