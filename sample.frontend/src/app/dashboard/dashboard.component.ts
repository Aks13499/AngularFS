import { Component } from '@angular/core';
import { HttpServiceService, Message } from '../service/http/http-service.service';
import { AuthenticationServiceService } from '../service/authentication/authentication-service.service';
import { StorageService } from '../service/authentication/storage.service';
import { EventBusService } from '../service/shared/event-bus.service';
import { EventData } from '../service/shared/event.class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

constructor(public httpService: HttpServiceService, public authenticationService: AuthenticationServiceService, public storageService: StorageService, private eventBusService: EventBusService ) {}

  msg: string = "";

  handleResponse(response: Message) {
    this.msg = response.message
  }

  ngOnInit() {
    this.msg = this.storageService.getUser().username;
  }
  
  logout(): void {
    this.eventBusService.emit(new EventData('logout', null));
  }
}
