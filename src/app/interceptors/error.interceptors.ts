import {
  HttpEvent, 
  HttpRequest,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs'; 
import { inject } from '@angular/core';

import { Router } from '@angular/router';


export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {

 
  const httpClient = inject(HttpClient);
  
  const router = inject(Router);

  return next(req).pipe(
    
    );
  } 
