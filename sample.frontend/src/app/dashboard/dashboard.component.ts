import { Component } from '@angular/core';
import { HttpServiceService, Message } from '../service/http/http-service.service';
import { AuthenticationServiceService } from '../service/authentication/authentication-service.service';
import { StorageService } from '../service/authentication/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

constructor(public httpService: HttpServiceService, public authenticationService: AuthenticationServiceService, public storageService: StorageService ) {}

  msg: string = "";

  handleResponse(response: Message) {
    this.msg = response.message
  }

  ngOnInit() {
    this.msg = this.storageService.getUser().username;
  }
  
  logout(): void {
    console.log(this.storageService.getUser());
    this.authenticationService.logout().subscribe();
  }
}
