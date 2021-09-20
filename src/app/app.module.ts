import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { Auth1Guard } from './guards/auth1.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [
      AuthenticationService,
      UserService,
      AuthGuard,
      Auth1Guard,
      { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

      // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
