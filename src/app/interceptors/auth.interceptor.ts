import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = 'your-auth-token';


    // Clone the request and add the authorization header
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    const l = localStorage.setItem('uttam', 'hi');

    // Pass the modified request along the interceptor chain
    return next.handle(request)
  }

}




