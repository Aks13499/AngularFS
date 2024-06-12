import { Component } from '@angular/core';
import { StorageService } from './service/authentication/storage.service';
import { EventBusService } from './service/shared/event-bus.service';
import { AuthenticationServiceService } from './service/authentication/authentication-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample.frontend';

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationServiceService,
    private eventBusService: EventBusService,
    private router: Router
  ) {}

  eventSubscription?: Subscription;

  ngOnInit(): void {

    this.eventSubscription = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }

  logout(): void {
    this.authenticationService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        this.router.navigate(['']);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
