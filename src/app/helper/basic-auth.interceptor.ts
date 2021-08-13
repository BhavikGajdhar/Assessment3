import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    if (currentUser && currentUser.authdata) {
        request = request.clone({
            setHeaders: { 
                Authorization: `Basic ${currentUser.authdata}`
            }
        });
    }

    return next.handle(request);
}
  
}
