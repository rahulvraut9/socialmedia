import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  private apiUrl = 'http://localhost:3000/users'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  signup(userData: any): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post(url, userData).pipe(
      catchError(this.handleError)
    );
  }
  
  // login(loginForm: any): Observable<any> {
  //   const url = `${this.apiUrl}/login`;
  //   const email = loginForm.get('email').value;
  //   const password = loginForm.get('password').value;
  //   const userData = { email, password };
  //   return this.http.post(url, userData).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  login(userData: any): Observable<any> {
    const url = `${this.apiUrl}`;
  
    return this.http.get(url).pipe(
      map((users: any[]) => {
        const foundUser = users.find(user => user.email === userData.email && user.password === userData.password);
  
        if (foundUser) {
          return foundUser;
        } else {
          throw new Error('Invalid email or password');
        }
      }),
      catchError(this.handleError)
    );
  }

}
