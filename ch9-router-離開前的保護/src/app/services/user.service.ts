import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { UserStoreService } from './user-store.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private userStoreService: UserStoreService
  ) {}

  login(user: User): Observable<any> {
    return this.http
      .post('/api/user/login', {
        username: user.name,
        password: user.password,
      })
      .pipe(
        map((resp: any) => {
          this.userStoreService.token = resp.token;
          return resp;
        })
      );
  }

  register(user: User): Observable<any> {
    return this.http.post('/api/user/register', {
      username: user.name,
      password: user.password,
    });
  }
}
