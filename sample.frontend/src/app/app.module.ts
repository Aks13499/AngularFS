import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationServiceService } from './service/authentication/authentication-service.service';
import { JwtModule } from '@auth0/angular-jwt';
import { InterceptorService } from './service/http/interceptor.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule,
    JwtModule
  ],
  providers: [
    AuthenticationServiceService,
    {
    provide:  HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
