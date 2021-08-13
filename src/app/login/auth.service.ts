import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  constructor(
      private router: Router,
      private http: HttpClient
  ) {
      this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')!));
      this.user = this.userSubject.asObservable();
  }

  public get userValue(): any {
      return this.userSubject.value;
  }

  login(username: string, password: string) {
      return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
          .pipe(map(user => {
              // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
              user.authdata = window.btoa(username + ':' + password);
              localStorage.setItem('user', JSON.stringify(user));
              this.userSubject.next(user);
              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('user');
      this.userSubject.next(null);
      this.router.navigate(['/']);
  }
}
