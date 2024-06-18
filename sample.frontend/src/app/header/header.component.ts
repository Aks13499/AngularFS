import { Component } from '@angular/core';
import { StorageService } from '../service/authentication/storage.service';
import { EventBusService } from '../service/shared/event-bus.service';
import { EventData } from '../service/shared/event.class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private storageService: StorageService, private eventBusService: EventBusService) {}

  isLoggedIn = false;

  ngOnInit(){
    this.isLoggedIn = this.storageService.isLoggedIn()
  }

  logout(): void {
    this.eventBusService.emit(new EventData('logout', null));
  }   

}
