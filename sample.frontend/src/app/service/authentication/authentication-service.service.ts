import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constant';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

const AUTH_API = API_URL + '/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationServiceService {
  constructor(private httpClient: HttpClient, private storageService: StorageService, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.httpClient.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    this.storageService.clean();   
    this.router.navigate(['\login']); 
    return this.httpClient.post(AUTH_API + 'signout', { }, httpOptions);
  }

  refreshToken() {
    return this.httpClient.post(AUTH_API + 'refreshtoken', { }, httpOptions);
  }

}
