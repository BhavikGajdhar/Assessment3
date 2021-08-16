import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // add authorization header with basic auth credentials if available
    
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
